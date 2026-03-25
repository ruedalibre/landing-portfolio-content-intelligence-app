import { useState, useEffect, useRef } from "react";
import { PLATFORMS, ROLES } from "../../constants/earlyAccessOptions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

const RequestAccessModal = ({ isOpen, onClose, source = "landing" }: Props) => {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [creatorFocus, setCreatorFocus] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !platform) return;

    setLoading(true);
    setError(false);

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
            <h2 className="modal__title">Join Early Access</h2>

            <p className="modal__subtitle">
              Be among the first creators building scalable content systems.
            </p>

            <form className="modal__form" onSubmit={handleSubmit}>
              {/* EMAIL */}

              <input
                ref={inputRef}
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* PLATFORM */}

              <div className="modal__section">
                <p className="modal__label">
                  Where do you publish most of your content?
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
                <p className="modal__label">What best describes you?</p>

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
                <p className="modal__label">
                  What do you usually create content about?
                </p>

                <input
                  type="text"
                  placeholder="AI tutorials, marketing, startups..."
                  value={creatorFocus}
                  onChange={(e) => setCreatorFocus(e.target.value)}
                />
              </div>

              {/* CTA */}

              <button
                type="submit"
                className="btn btn--primary modal__cta"
                disabled={loading || !platform}
              >
                {loading ? "Joining..." : "Join Early Access"}
              </button>
            </form>

            {error && (
              <p className="modal__error">
                Something went wrong. Please try again.
              </p>
            )}
          </>
        ) : (
          <div className="modal__success">
            <h2 className="modal__title">You're on the list 🎉</h2>

            <p className="modal__subtitle">
              We'll invite early creators as soon as the MVP is ready.
            </p>

            <button
              className="btn btn--primary"
              onClick={handleClose}
              type="button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestAccessModal;
