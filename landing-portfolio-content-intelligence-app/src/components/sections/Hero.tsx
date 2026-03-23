import heroImage from "../../assets/images/dashboard.png";
// import { useTranslation } from "react-i18next";

const Hero = () => {
  // const { t } = useTranslation("landing");

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Turn your content into a scalable system{" "}
            <span className="highlight">
              Understand what works. Reuse your best ideas.
            </span>
          </h1>

          <p className="hero__subtitle">
            A content intelligence platform for creators and teams.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Request early access
            </a>

            <a href="#contact" className="btn btn--secondary">
              Let’s connect
            </a>
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
