const Solution = () => {
  return (
    <section className="solution">
      <div className="container solution__content">

        <div className="solution__text">
          <h2 className="solution__title">
            Turn your ideas into{" "}
            <span className="highlight">structured systems</span>
          </h2>

          <p className="solution__subtitle">
            Our platform understands how your ideas evolve into content — and
            helps you scale them intentionally.
          </p>

          <ul className="solution__list">
            <li><strong>Identify</strong> which ideas generate the most content</li>
            <li><strong>Track</strong> how ideas evolve across formats</li>
            <li><strong>Detect</strong> patterns in your creative process</li>
            <li><strong>Scale</strong> what works into repeatable systems</li>
          </ul>
        </div>

        <div className="solution__visual">
          <div className="solution__flow">
            <span>Ideas</span>
            <span className="arrow">→</span>
            <span>Content</span>
            <span className="arrow">→</span>
            <span>Patterns</span>
            <span className="arrow">→</span>
            <span>Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;