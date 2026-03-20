const problems = [
  "You don’t know what actually works",
  "Your content is scattered across platforms",
  "Your best ideas get lost and never reused",
  "You’re creating more content, but not better results",
];

const Problem = () => {
  return (
    <section className="problem">
      <div className="container problem__content">
        <h2 className="problem__title">Creators publish constantly</h2>

        <p className="problem__subtitle">
          But their content is fragmented, hard to analyze, and difficult to scale.
        </p>

        <div className="problem__grid">
          {problems.map((item, index) => (
            <div key={index} className="problem__card">
              <span className="problem__icon">✕</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
