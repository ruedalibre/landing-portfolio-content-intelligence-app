import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { PLATFORMS, ROLES } from "../../constants/earlyAccessOptions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

// Map role label → i18n key (labels are in English in the constants)
const ROLE_KEY: Record<string, string> = {
  Creator: "independent_creator",
  Agency:  "agency",
  Brand:   "brand",
};

const RequestAccessModal = ({ isOpen, onClose, source = "landing" }: Props) => {
  const { t, i18n } = useTranslation("early_access_modal");

  const [email, setEmail]               = useState("");
  const [platform, setPlatform]         = useState<string | null>(null);
  const [role, setRole]                 = useState<string | null>(null);
  const [creatorFocus, setCreatorFocus] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const canSubmit = email.trim() !== "" && platform !== null;

  // ── handleSubmit — sin cambios ──────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !platform) return;

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
            platform_id:   platform,
            role_id:       role,
            creator_focus: creatorFocus,
            source,
            language,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Request failed");

      setSubmitted(true);
    } catch (err) {
      console.error("Early access request error:", err);
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
                  className="modal-field__input"
                  placeholder="tú@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="modal-divider" aria-hidden="true" />

              {/* Plataforma */}
              <div className="modal-field">
                <label className="modal-field__label">
                  {t("platform_label")}{" "}
                  <span className="modal-field__required">*</span>
                </label>
                <div className="modal-chips">
                  {PLATFORMS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`modal-chip${platform === p.id ? " modal-chip--active-t" : ""}`}
                      onClick={() => setPlatform(p.id)}
                      aria-pressed={platform === p.id}
                    >
                      {t(`platforms.${p.label.toLowerCase()}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rol */}
              <div className="modal-field">
                <label className="modal-field__label">
                  {t("role_label")}{" "}
                  <span className="modal-field__optional">{t("role_optional")}</span>
                </label>
                <div className="modal-chips">
                  {ROLES.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      className={`modal-chip${role === r.id ? " modal-chip--active-s" : ""}`}
                      onClick={() => setRole(r.id)}
                      aria-pressed={role === r.id}
                    >
                      {t(`roles.${ROLE_KEY[r.label] ?? r.label.toLowerCase()}`)}
                    </button>
                  ))}
                </div>
              </div>

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
                  onChange={(e) => setCreatorFocus(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="modal-submit"
                disabled={loading || !canSubmit}
              >
                {loading ? t("loading") : t("submit")}
              </button>

            </form>

            {error && (
              <p className="modal-error">{t("error")}</p>
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
