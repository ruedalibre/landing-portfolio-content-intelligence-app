import { CircleAlert, Split, LightbulbOff, Flame } from "lucide-react";

const problems = [
  {
    icon: CircleAlert,
    text: "You don’t know what actually works",
  },
  {
    icon: Split,
    text: "Your content is scattered across platforms",
  },
  {
    icon: LightbulbOff,
    text: "Your best ideas get lost and never reused",
  },
  {
    icon: Flame,
    text: "You’re creating more content, but not better results",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="problem reveal">
      <div className="container problem__content">
        <h2 className="problem__title">Creators publish constantly</h2>

        <p className="problem__subtitle">
          But their content is fragmented, hard to analyze, and difficult to
          scale.
        </p>

        <div className="problem__grid">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="problem__card">
                <span className="problem__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
