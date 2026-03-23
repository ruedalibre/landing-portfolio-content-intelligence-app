import i18n from "../../i18n";

type Props = {
  onRequestAccess: () => void;
};

const Navbar = ({ onRequestAccess }: Props) => {
  const currentLang = i18n.language;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__content">
        {/* LOGO */}
        <div className="navbar__logo">
          Content <span>Intelligence</span>
        </div>

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
            Request Access
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
