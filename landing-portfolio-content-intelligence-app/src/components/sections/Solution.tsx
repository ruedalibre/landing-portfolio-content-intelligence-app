const Solution = () => {
  return (
    <section className="solution">
      <div className="container solution__content">
        {/* TEXT */}
        <div className="solution__text">
          <h2 className="solution__title">
            We turn your content into{" "}
            <span className="highlight">structured intelligence</span>
          </h2>

          <p className="solution__subtitle">
            Our platform analyzes how you create content — not just how it
            performs.
          </p>

          <ul className="solution__list">
            <li>
              <strong>Identify</strong> what ideas generate results
            </li>
            <li>
              <strong>Detect</strong> patterns in your content
            </li>
            <li>
              <strong>Understand</strong> what to repeat and what to change
            </li>
            <li>
              <strong>Build</strong> a scalable content strategy
            </li>
          </ul>
        </div>

        {/* VISUAL */}
        <div className="solution__visual">
          <div className="solution__flow">
            <span>Content</span>
            <span className="arrow">→</span>
            <span>Organized</span>
            <span className="arrow">→</span>
            <span>Analyzed</span>
            <span className="arrow">→</span>
            <span>Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
