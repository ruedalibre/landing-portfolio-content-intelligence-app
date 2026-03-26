import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const Navbar = ({ onRequestAccess }: Props) => {
  const { i18n } = useTranslation(); // ← reactivo

  const currentLang = i18n.language;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log("changing language to", lang);
    localStorage.setItem("lang", lang);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__content">
        <a href="#top" className="navbar__logo">
          Content <span>Intelligence</span>
        </a>

        <div className="navbar__links">
          <a className="nav__link" href="#product">
            Product
          </a>

          <a className="nav__link" href="#how-it-works">
            How it works
          </a>

          <a className="nav__link" href="#contact">
            Contact
          </a>
        </div>

        <div className="navbar__actions">
          <button
            className="btn btn--primary"
            onClick={onRequestAccess}
            type="button"
          >
            Join early access
          </button>

          <div className="lang-switch">
            <button
              onClick={() => changeLang("en")}
              className={currentLang === "en" ? "active" : ""}
              type="button"
            >
              EN
            </button>

            <button
              onClick={() => changeLang("es")}
              className={currentLang === "es" ? "active" : ""}
              type="button"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
