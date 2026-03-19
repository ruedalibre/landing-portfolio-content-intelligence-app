const steps = [
  {
    title: "Capture content",
    description: "Register your content with structured metadata.",
  },
  {
    title: "Structure ideas",
    description: "Organize content into reusable creative units.",
  },
  {
    title: "Analyze patterns",
    description: "Detect trends, behaviors and content signals.",
  },
  {
    title: "Get insights",
    description: "Turn data into actionable recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works__title">How it works</h2>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__number">{index + 1}</div>

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
