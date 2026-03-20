import heroImage from "../../assets/images/dashboard.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("landing");
  console.log(t("hero.subtitle"));

  return (
    <section className="hero">
      <div className="container hero__grid">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Turn your content into a{" "}
            <span className="highlight">scalable content systems</span>
          </h1>

          <p className="hero__subtitle">
            {t("hero.subtitle")}
          </p>

          <p className="hero__description">
            A content intelligence platform for creators and teams.
          </p>

          <div className="hero__cta">
            <button className="btn btn--primary">Request early access</button>

            <button className="btn btn--secondary">Let’s connect</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <img src={heroImage} alt="Dashboard preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
