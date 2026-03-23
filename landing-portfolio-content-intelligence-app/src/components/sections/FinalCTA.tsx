const FinalCTA = () => {
  return (
    <section id="contact" className="cta reveal">
      <div className="container cta__content">

        <h2 className="cta__title">
          Let’s build the future of content
        </h2>

        <p className="cta__subtitle">
          We’re looking to collaborate with creators, teams and partners.
        </p>

        <div className="cta__actions">
          <button className="btn btn--primary" type="button">
            <a href="#contact">Get early access</a>
          </button>

          <button className="btn btn--secondary" type="button">
            <a href="#how-it-works">See how it works</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;