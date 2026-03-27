import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { PLATFORMS, ROLES } from "../../constants/earlyAccessOptions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

const RequestAccessModal = ({ isOpen, onClose, source = "landing" }: Props) => {
  const { t, i18n } = useTranslation("early_access_modal");

  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [creatorFocus, setCreatorFocus] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const canSubmit = email.trim() !== "" && platform !== null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !platform) return;

    setLoading(true);
    setError(false);

    /* =========================
    LANGUAGE DETECTION
    ========================= */

    const language = i18n.language?.startsWith("es") ? "es" : "en";

    try {
      const res = await fetch(
        "https://szpdbyuzdeluizxslugd.supabase.co/functions/v1/early-access",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            email,
            platform_id: platform,
            role_id: role,
            creator_focus: creatorFocus,
            source,
            language, // ← NEW FIELD
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

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

  /* scroll lock */

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* ESC close */

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  /* autofocus */

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" ref={modalRef}>
        <button className="modal__close" onClick={handleClose} type="button">
          ×
        </button>

        {!submitted ? (
          <>
            <h2 className="modal__title">{t("title")}</h2>

            <p className="modal__subtitle">{t("subtitle")}</p>

            <form className="modal__form" onSubmit={handleSubmit}>
              {/* EMAIL */}

              <div className="modal__section">
                <p className="modal__label">
                  {t("email_label")} <span className="modal__required">*</span>
                </p>

                <input
                  ref={inputRef}
                  type="email"
                  placeholder={t("email_placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* PLATFORM */}

              <div className="modal__section">
                <p className="modal__label">
                  {t("platform_label")}
                  <span className="modal__required">*</span>
                </p>

                <div className="modal__chips">
                  {PLATFORMS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`chip ${
                        platform === p.id ? "chip--active" : ""
                      }`}
                      onClick={() => setPlatform(p.id)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ROLE */}

              <div className="modal__section modal__optional">
                <p className="modal__label">{t("role_label")}</p>

                <div className="modal__chips">
                  {ROLES.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      className={`chip ${role === r.id ? "chip--active" : ""}`}
                      onClick={() => setRole(r.id)}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CREATOR FOCUS */}

              <div className="modal__section modal__optional">
                <p className="modal__label">{t("focus_label")}</p>

                <input
                  type="text"
                  placeholder={t("focus_placeholder")}
                  value={creatorFocus}
                  onChange={(e) => setCreatorFocus(e.target.value)}
                />
              </div>

              {/* CTA */}

              <button
                type="submit"
                className="btn btn--primary modal__cta"
                disabled={loading || !canSubmit}
              >
                {loading ? t("loading") : t("cta")}
              </button>
            </form>

            {error && <p className="modal__error">{t("error")}</p>}
          </>
        ) : (
          <div className="modal__success">
            <h2 className="modal__title">{t("success_title")}</h2>

            <p className="modal__subtitle">{t("success_subtitle")}</p>

            <button
              className="btn btn--primary"
              onClick={handleClose}
              type="button"
            >
              {t("close")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestAccessModal;
