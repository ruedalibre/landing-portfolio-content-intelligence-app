const steps = [
  {
    title: "Capture content",
    description: "Log your content in a structured and organized way.",
  },
  {
    title: "Structure ideas",
    description: "Connect content to ideas and topics.",
  },
  {
    title: "Analyze patterns",
    description: "Understand what works across formats and platforms.",
  },
  {
    title: "Get insights",
    description: "Turn data into clear, actionable decisions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how">
      <div className="container how__content">
        <h2 className="how__title">How it works</h2>

        <div className="how__grid">
          {steps.map((step, index) => (
            <div key={index} className="how__step">
              <div className="how__number">{index + 1}</div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
