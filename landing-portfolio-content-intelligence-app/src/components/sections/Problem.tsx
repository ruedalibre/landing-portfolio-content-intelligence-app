import { CircleAlert, Split, LightbulbOff, Flame } from "lucide-react";
import { useTranslation } from "react-i18next";

const problems = [
  { key: "no_insight", icon: CircleAlert },
  { key: "scattered_content", icon: Split },
  { key: "lost_ideas", icon: LightbulbOff },
  { key: "more_content_less_results", icon: Flame },
];

const Problem = () => {
  const { t } = useTranslation("problem");

  return (
    <section id="problem" className="problem reveal">
      <div className="container problem__content">
        <h2 className="problem__title">{t("title")}</h2>

        <p className="problem__subtitle">{t("subtitle")}</p>

        <div className="problem__grid">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.key} className="problem__card">
                <span className="problem__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <p>{t(`items.${item.key}`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
