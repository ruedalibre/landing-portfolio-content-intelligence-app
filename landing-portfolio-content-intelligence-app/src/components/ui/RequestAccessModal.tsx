import { useState, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RequestAccessModal = ({ isOpen, onClose }: Props) => {
  const [email, setEmail] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("email submitted:", email);

    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // cerrar con ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // ahora sí podemos salir temprano
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" ref={modalRef}>
        <button className="modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">Get early access</h2>

        <p className="modal__subtitle">
          Join the first creators exploring content intelligence systems.
        </p>

        <form className="modal__form" onSubmit={handleSubmit}>
          <input
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
      </div>
    </div>
  );
};

export default RequestAccessModal;
