import { Brain, Layers, Fingerprint, Sparkles } from "lucide-react";

const capabilities = [
  {
    title: "Idea Intelligence",
    description:
      "Understand which ideas generate the most content and results.",
    icon: Brain,
  },
  {
    title: "Topic Intelligence",
    description:
      "Identify your dominant topics and detect emerging opportunities.",
    icon: Layers,
  },
  {
    title: "Content DNA",
    description:
      "Discover your creative profile: topics, formats and patterns.",
    icon: Fingerprint,
  },
  {
    title: "Insights Engine",
    description:
      "Turn data into clear, actionable insights you can use immediately.",
    icon: Sparkles,
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities">
      <div className="container">
        <h2 className="capabilities__title">What you can do</h2>

        <div className="capabilities__grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="capabilities__card">
                <div className="capabilities__icon">
                  <Icon size={22} strokeWidth={1.8} />
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
