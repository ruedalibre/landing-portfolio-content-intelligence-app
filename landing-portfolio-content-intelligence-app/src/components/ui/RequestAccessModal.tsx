import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useEarlyAccessOptions } from "../../hooks/useEarlyAccessOptions.ts";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

// Validation constants
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const FOCUS_MAX_CHARS = 120;

// Skeleton widths for platform and role chips while loading
const PLATFORM_SKELETON_WIDTHS = [80, 70, 90, 65, 40, 55];
const ROLE_SKELETON_WIDTHS = [120, 70, 60];

const RequestAccessModal = ({ isOpen, onClose, source = "landing" }: Props) => {
  const { t, i18n } = useTranslation("early_access_modal");

  // Options fetched from Supabase at runtime
  const { platforms, roles, optionsLoading, optionsError } = useEarlyAccessOptions();

  // Form state
  const [email, setEmail]               = useState("");
  const [platform, setPlatform]         = useState<string | null>(null);
  const [role, setRole]                 = useState<string | null>(null);
  const [creatorFocus, setCreatorFocus] = useState("");

  // Submit state
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(false);

  // Touched state — show errors only after field interaction
  const [emailTouched, setEmailTouched]       = useState(false);
  const [platformTouched, setPlatformTouched] = useState(false);
  const [roleTouched, setRoleTouched]         = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Derived validation
  const isEmailValid    = EMAIL_REGEX.test(email);
  const isPlatformValid = platform !== null;
  const isRoleValid     = role !== null;
  const isFormValid     = isEmailValid && isPlatformValid && isRoleValid;

  // Show errors only when touched
  const showEmailError    = emailTouched    && !isEmailValid;
  const showPlatformError = platformTouched && !isPlatformValid;
  const showRoleError     = roleTouched     && !isRoleValid;

  // ── Handlers ─────────────────────────────────────────────────────────

  const handleEmailBlur = () => setEmailTouched(true);

  const handlePlatformSelect = (id: string) => {
    setPlatform(id);
    setPlatformTouched(true);
  };

  const handleRoleSelect = (id: string) => {
    setRole(id);
    setRoleTouched(true);
  };

  const handleFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= FOCUS_MAX_CHARS) {
      setCreatorFocus(e.target.value);
    }
  };

  // ── handleSubmit ──────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to surface any pending errors
    setEmailTouched(true);
    setPlatformTouched(true);
    setRoleTouched(true);

    if (!isFormValid) return;

    setLoading(true);
    setError(false);

    const language = i18n.language?.startsWith("es") ? "es" : "en";

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/early-access`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            platform_id:   platform,   // UUID from Supabase — no longer hardcoded
            role_id:       role,        // UUID from Supabase — no longer hardcoded
            creator_focus: creatorFocus,
            source,
            language,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Request failed");

      setSubmitted(true);
    } catch (_err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    setPlatform(null);
    setRole(null);
    setCreatorFocus("");
    setError(false);
    setEmailTouched(false);
    setPlatformTouched(false);
    setRoleTouched(false);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  // Scroll lock — incluye fix iOS Safari
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow  = "hidden";
    document.body.style.position  = "fixed";
    document.body.style.width     = "100%";
    return () => {
      document.body.style.overflow  = "auto";
      document.body.style.position  = "";
      document.body.style.width     = "";
    };
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Autofocus
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal__close"
          onClick={handleClose}
          type="button"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <p className="modal__eyebrow">{t("eyebrow")}</p>
            <h2 className="modal__title" id="modal-title">{t("title")}</h2>

            <form onSubmit={handleSubmit} noValidate>

              {/* Email */}
              <div className="modal-field">
                <label htmlFor="modal-email" className="modal-field__label">
                  {t("email_label")}{" "}
                  <span className="modal-field__required">*</span>
                </label>
                <input
                  id="modal-email"
                  ref={inputRef}
                  type="email"
                  className={`modal-field__input${showEmailError ? " modal-field__input--error" : ""}`}
                  placeholder="tú@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleEmailBlur}
                  required
                  autoComplete="email"
                />
                {showEmailError && (
                  <p className="modal-field__error" role="alert">
                    {t("error_email")}
                  </p>
                )}
              </div>

              <div className="modal-divider" aria-hidden="true" />

              {/* Plataforma */}
              <div className="modal-field">
                <label className="modal-field__label">
                  {t("platform_label")}{" "}
                  <span className="modal-field__required">*</span>
                </label>

                {optionsLoading ? (
                  <div className="modal-chips modal-chips--loading" aria-hidden="true">
                    {PLATFORM_SKELETON_WIDTHS.map((w, i) => (
                      <div
                        key={i}
                        className="modal-chip modal-chip--skeleton"
                        style={{ width: w }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="modal-chips">
                    {platforms.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        className={`modal-chip${platform === p.id ? " modal-chip--active-t" : ""}`}
                        onClick={() => handlePlatformSelect(p.id)}
                        aria-pressed={platform === p.id}
                      >
                        {t(`platforms.${p.value}`, { defaultValue: p.label })}
                      </button>
                    ))}
                  </div>
                )}

                {showPlatformError && (
                  <p className="modal-field__error" role="alert">
                    {t("error_platform")}
                  </p>
                )}
              </div>

              {/* Rol */}
              <div className="modal-field">
                <label className="modal-field__label">
                  {t("role_label")}{" "}
                  <span className="modal-field__required">*</span>
                </label>

                {optionsLoading ? (
                  <div className="modal-chips modal-chips--loading" aria-hidden="true">
                    {ROLE_SKELETON_WIDTHS.map((w, i) => (
                      <div
                        key={i}
                        className="modal-chip modal-chip--skeleton"
                        style={{ width: w }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="modal-chips">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        className={`modal-chip${role === r.id ? " modal-chip--active-s" : ""}`}
                        onClick={() => handleRoleSelect(r.id)}
                        aria-pressed={role === r.id}
                      >
                        {t(`roles.${r.value}`, { defaultValue: r.label })}
                      </button>
                    ))}
                  </div>
                )}

                {showRoleError && (
                  <p className="modal-field__error" role="alert">
                    {t("error_role")}
                  </p>
                )}
              </div>

              {/* Error al cargar opciones desde Supabase */}
              {optionsError && !optionsLoading && (
                <p className="modal-field__error modal-field__error--global" role="alert">
                  {optionsError}
                </p>
              )}

              <div className="modal-divider" aria-hidden="true" />

              {/* Focus */}
              <div className="modal-field modal-field--last">
                <label htmlFor="modal-focus" className="modal-field__label">
                  {t("focus_label")}{" "}
                  <span className="modal-field__optional">{t("focus_optional")}</span>
                </label>
                <input
                  id="modal-focus"
                  type="text"
                  className="modal-field__input"
                  placeholder={t("focus_placeholder")}
                  value={creatorFocus}
                  onChange={handleFocusChange}
                  autoComplete="off"
                  maxLength={FOCUS_MAX_CHARS}
                />
                <div className="modal-field__counter">
                  <span className={creatorFocus.length >= FOCUS_MAX_CHARS ? "modal-field__counter--limit" : ""}>
                    {creatorFocus.length}
                  </span>
                  /{FOCUS_MAX_CHARS}
                </div>
              </div>

              <button
                type="submit"
                className="modal-submit"
                disabled={loading || optionsLoading || !isFormValid}
              >
                {loading ? t("loading") : t("submit")}
              </button>

            </form>

            {error && (
              <p className="modal-error" role="alert">{t("error")}</p>
            )}

            <p className="modal-legal">
              {t("legal")}{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                {t("legal_terms")}
              </a>
              {" "}{t("legal_and")}{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                {t("legal_privacy")}
              </a>
            </p>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success__icon">🌱</div>
            <h3 className="modal-success__title">Tu lugar está reservado.</h3>
            <p className="modal-success__body">
              Te avisaremos cuando sea tu momento de entrar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestAccessModal;
