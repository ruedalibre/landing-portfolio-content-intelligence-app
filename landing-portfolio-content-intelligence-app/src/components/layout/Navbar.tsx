import i18n from "../../i18n";
import { useState, useEffect } from "react";

type Props = {
  onRequestAccess: () => void;
};

const Navbar = ({ onRequestAccess }: Props) => {
  const currentLang = i18n.language;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
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
        {/* LOGO */}
        <a href="#top" className="navbar__logo">
          Content <span>Intelligence</span>
        </a>

        {/* LINKS */}
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

        {/* ACTIONS */}
        <div className="navbar__actions">
          <button className="btn btn--primary" onClick={onRequestAccess}>
            Join early access
          </button>

          <div className="lang-switch">
            <button
              onClick={() => changeLang("en")}
              className={currentLang === "en" ? "active" : ""}
            >
              EN
            </button>

            <button
              onClick={() => changeLang("es")}
              className={currentLang === "es" ? "active" : ""}
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
