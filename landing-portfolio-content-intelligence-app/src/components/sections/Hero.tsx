// import heroImage from "../../assets/images/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__grid">
        {/* LEFT CONTENT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Turn your content into a scalable system
          </h1>

          <p className="hero__subtitle">
            Understand what works. Reuse your best ideas. Grow with strategy,
            not intuition.
          </p>

          <p className="hero__description">
            A content intelligence platform for creators and teams.
          </p>

          <div className="hero__cta">
            <button className="btn btn--primary">Request early access</button>
            <button className="btn btn--secondary">Let’s connect</button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero__visual">
          <div className="hero__mock">Dashboard Preview</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
