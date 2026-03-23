type Props = {
  onRequestAccess: () => void;
};

const FinalCTA = ({ onRequestAccess }: Props) => {
  return (
    <section id="contact" className="cta reveal">
      <div className="container cta__content">
        <h2 className="cta__title">Let’s build the future of content</h2>

        <p className="cta__subtitle">
          We’re looking to collaborate with creators, teams and partners.
        </p>

        <div className="cta__actions">
          <button className="btn btn--primary" onClick={onRequestAccess}>
            Get early access
          </button>

          <a href="#how-it-works" className="btn btn--secondary">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
