import { NotebookPen, CircleHelp, RefreshCcw, Waypoints } from "lucide-react";
import { useTranslation } from "react-i18next";

const problems = [
  { key: "lost_ideas",  icon: NotebookPen },
  { key: "no_criteria", icon: CircleHelp },
  { key: "always_zero", icon: RefreshCcw },
  { key: "no_path",     icon: Waypoints },
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
                <div className="problem__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <p className="problem__card-title">
                  {t(`items.${item.key}.title`)}
                </p>
                <p className="problem__card-description">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
