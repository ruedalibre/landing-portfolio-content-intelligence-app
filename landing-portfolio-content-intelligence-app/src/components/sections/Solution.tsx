import "../../styles/sections/_solution.scss";
import {
  Lightbulb,
  FileText,
  BarChart3,
  Sparkles,
  Target,
  RefreshCcw,
} from "lucide-react";

const nodes = [
  { icon: Lightbulb, title: "Ideas", micro: "Creative inputs" },
  { icon: FileText, title: "Content", micro: "Ideas become posts" },
  { icon: BarChart3, title: "Patterns", micro: "Detect what works" },
  { icon: Sparkles, title: "Insights", micro: "Understand why" },
  { icon: Target, title: "Strategy", micro: "Decide what to scale" },
  { icon: RefreshCcw, title: "New Ideas", micro: "Start the next cycle" },
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
          <span className="phase-input">INPUT →</span>
          <span className="phase-intelligence">INTELLIGENCE →</span>
          <span className="phase-output">OUTPUT →</span>
        </div>

        {/* LOOP */}

        <div className="solution__loop">
          {nodes.map((node, i) => {
            const Icon = node.icon;

            return (
              <div className="solution__node" key={i}>
                <div className="solution__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h4>{node.title}</h4>

                <p>{node.micro}</p>
              </div>
            );
          })}
        </div>

        {/* RESULT */}

        <p className="solution__result">
          Your content becomes a system that improves over time!
        </p>
      </div>
    </section>
  );
};

export default Solution;
