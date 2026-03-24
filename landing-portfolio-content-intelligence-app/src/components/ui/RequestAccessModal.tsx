import { useState, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RequestAccessModal = ({ isOpen, onClose }: Props) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("email submitted:", email);

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    globalThis.addEventListener("keydown", handleEsc);

    return () => {
      globalThis.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

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
            <h2 className="modal__title">Get early access</h2>

            <p className="modal__subtitle">
              Join the first creators exploring content intelligence systems.
            </p>

            <form className="modal__form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="btn btn--primary">
                Request access
              </button>
            </form>
          </>
        ) : (
          <div className="modal__success">
            <h2 className="modal__title">You're on the list 🎉</h2>

            <p className="modal__subtitle">
              We'll let you know when early access becomes available.
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
