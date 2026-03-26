import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const Navbar = ({ onRequestAccess }: Props) => {
  const { t, i18n } = useTranslation("navbar");

  const currentLang = i18n.language.slice(0, 2);

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
            {t("product")}
          </a>

          <a className="nav__link" href="#how-it-works">
            {t("how_it_works")}
          </a>

          <a className="nav__link" href="#contact">
            {t("contact")}
          </a>
        </div>

        {/* ACTIONS */}
        <div className="navbar__actions">
          <button
            className="btn btn--primary"
            onClick={onRequestAccess}
            type="button"
          >
            {t("cta")}
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
