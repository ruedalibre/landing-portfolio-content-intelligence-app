const problems = [
  "They don’t know what actually works",
  "Content is scattered across platforms",
  "Ideas are reused randomly (or not at all)",
  "Strategy is based on intuition, not data",
];

const Problem = () => {
  return (
    <section className="problem">
      <div className="container problem__content">
        <h2 className="problem__title">Creators publish constantly</h2>

        <p className="problem__subtitle">
          But they lack clarity on what actually drives growth.
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
