import { Brain, Layers, Fingerprint, Sparkles } from "lucide-react";

const capabilities = [
  {
    title: "Idea Intelligence",
    description:
      "Identify which ideas generate the most content and can be scaled.",
    icon: Brain,
  },
  {
    title: "Content Evolution",
    description:
      "Track how your ideas evolve across formats, platforms and executions.",
    icon: Layers,
  },
  {
    title: "Creative DNA",
    description:
      "Understand your creative profile — formats, topics and patterns that define your content.",
    icon: Fingerprint,
  },
  {
    title: "Pattern Recognition",
    description:
      "Detect what works and turn it into repeatable content systems.",
    icon: Sparkles,
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="capabilities reveal">
      <div className="container capabilities__content">
        <h2 className="capabilities__title">What you can do</h2>

        <div className="capabilities__grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="capabilities__card">
                <div className="capabilities__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
