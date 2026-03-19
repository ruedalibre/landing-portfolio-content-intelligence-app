const steps = ["Ideas", "Content", "Patterns", "Insights", "Strategy"];

const CoreLoop = () => {
  return (
    <section className="core-loop">
      <div className="container core-loop__content">
        <h2 className="core-loop__title">
          Turn your creativity into a <span className="highlight">system</span>
        </h2>

        <div className="core-loop__flow">
          {steps.map((step, index) => (
            <div key={index} className="core-loop__item">
              <span>{step}</span>

              {index < steps.length - 1 && (
                <div className="core-loop__arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreLoop;
