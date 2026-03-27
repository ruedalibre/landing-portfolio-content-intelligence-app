import "../../styles/sections/_solution.scss";
import { useTranslation } from "react-i18next";
import {
  Lightbulb,
  FileText,
  BarChart3,
  Sparkles,
  Target,
  RefreshCcw,
} from "lucide-react";

const nodes = [
  { key: "ideas", icon: Lightbulb },
  { key: "content", icon: FileText },
  { key: "patterns", icon: BarChart3 },
  { key: "insights", icon: Sparkles },
  { key: "strategy", icon: Target },
  { key: "new_ideas", icon: RefreshCcw },
];

const Solution = () => {
  const { t } = useTranslation("solution");

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">
        <h2 className="solution__title">
          {t("title")} <span>{t("highlight")}</span>
        </h2>

        <p className="solution__subtitle">{t("subtitle")}</p>

        <div className="solution__phases">
          <span className="phase-input">{t("phase_input")} →</span>
          <span className="phase-intelligence">
            {t("phase_intelligence")} →
          </span>
          <span className="phase-output">{t("phase_output")} →</span>
        </div>

        <div className="solution__loop">
          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <div className="solution__node" key={node.key}>
                <div className="solution__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h4>{t(`nodes.${node.key}.title`)}</h4>

                <p>{t(`nodes.${node.key}.micro`)}</p>
              </div>
            );
          })}
        </div>

        <p className="solution__result">{t("result")}</p>
      </div>
    </section>
  );
};

export default Solution;
