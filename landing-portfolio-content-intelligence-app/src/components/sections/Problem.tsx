import { CircleAlert, Split, LightbulbOff, Flame } from "lucide-react";
import { useTranslation } from "react-i18next";

const problems = [
  { icon: CircleAlert },
  { icon: Split },
  { icon: LightbulbOff },
  { icon: Flame },
];

const Problem = () => {
  const { t } = useTranslation("problem");

  const items = t("items", { returnObjects: true }) as string[];

  return (
    <section id="problem" className="problem reveal">
      <div className="container problem__content">
        <h2 className="problem__title">{t("title")}</h2>

        <p className="problem__subtitle">{t("subtitle")}</p>

        <div className="problem__grid">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="problem__card">
                <span className="problem__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <p>{items[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
