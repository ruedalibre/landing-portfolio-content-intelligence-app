import "../../styles/sections/_solution.scss";

const nodes = [
  { icon: "💡", title: "Ideas", micro: "Creative inputs" },
  { icon: "🧩", title: "Content", micro: "Ideas become posts" },
  { icon: "📊", title: "Patterns", micro: "Detect what works" },
  { icon: "✨", title: "Insights", micro: "Understand why" },
  { icon: "🎯", title: "Strategy", micro: "Decide what to scale" },
  { icon: "🔁", title: "New Ideas", micro: "Start the next cycle" },
];

const Solution = () => {
  return (
    <section className="solution">
      <div className="container solution__content">
        <h2 className="solution__title">
          From ideas to <span>scalable systems</span>
        </h2>

        <p className="solution__subtitle">
          Understand what works, how ideas evolve and how to scale them.
        </p>

        {/* PHASE LABELS */}

        <div className="solution__phases">
          <span className="phase-input">INPUT</span>

          <span className="phase-intelligence">INTELLIGENCE</span>

          <span className="phase-output">OUTPUT</span>
        </div>

        {/* LOOP */}

        <div className="solution__loop">
          {nodes.map((node, i) => (
            <div className="solution__item" key={i}>
              <div className="solution__node">
                <div className="solution__icon">{node.icon}</div>

                <h4>{node.title}</h4>

                <p>{node.micro}</p>
              </div>

              {i < nodes.length - 1 && <div className="solution__arrow">→</div>}

              {i === nodes.length - 1 && (
                <div className="solution__arrow-return">↩</div>
              )}
            </div>
          ))}
        </div>

        {/* RESULT */}

        <p className="solution__result">
          Your content becomes a system that improves over time.
        </p>
      </div>
    </section>
  );
};

export default Solution;
