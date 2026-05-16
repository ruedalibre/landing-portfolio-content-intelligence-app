import { useTranslation } from "react-i18next";

const Solution = () => {
  const { t } = useTranslation("solution");

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">

        <div className="solution__header">
          <span className="section-label">{t("label")}</span>
          <h2 className="solution__title">
            {t("title")} <span className="highlight">{t("highlight")}</span>
          </h2>
          <p className="solution__subtitle">{t("subtitle")}</p>
        </div>

        <div className="solution__loop">

          {/* Fila superior */}
          <div className="solution__row">
            <div className="solution__step solution__step--teal">
              <span className="solution__phase">{t("steps.capture.phase")}</span>
              <h4>{t("steps.capture.title")}</h4>
              <p>{t("steps.capture.line1")}</p>
              <p>{t("steps.capture.line2")}</p>
            </div>
            <div className="solution__arrow solution__arrow--right">→</div>
            <div className="solution__step solution__step--teal">
              <span className="solution__phase">{t("steps.convert.phase")}</span>
              <h4>{t("steps.convert.title")}</h4>
              <p>{t("steps.convert.line1")}</p>
              <p>{t("steps.convert.line2")}</p>
            </div>
          </div>

          {/* Flecha derecha bajando */}
          <div className="solution__arrows-sides">
            <div className="solution__arrow-spacer" />
            <div className="solution__arrow solution__arrow--down">↓</div>
          </div>

          {/* Centro del loop */}
          <div className="solution__loop-center">
            <div className="solution__loop-badge">
              <span className="solution__loop-title">{t("loop_title")}</span>
              <span className="solution__loop-subtitle">{t("loop_subtitle")}</span>
              <span className="solution__loop-icon">↺</span>
            </div>
          </div>

          {/* Flecha izquierda subiendo */}
          <div className="solution__arrows-sides">
            <div className="solution__arrow solution__arrow--up">↑</div>
            <div className="solution__arrow-spacer" />
          </div>

          {/* Fila inferior — orden invertido para que el loop cierre */}
          <div className="solution__row solution__row--reverse">
            <div className="solution__step solution__step--purple">
              <span className="solution__phase">{t("steps.grow.phase")}</span>
              <h4>{t("steps.grow.title")}</h4>
              <p>{t("steps.grow.line1")}</p>
              <p>{t("steps.grow.line2")}</p>
            </div>
            <div className="solution__arrow solution__arrow--left">←</div>
            <div className="solution__step solution__step--purple">
              <span className="solution__phase">{t("steps.insights.phase")}</span>
              <h4>{t("steps.insights.title")}</h4>
              <p>{t("steps.insights.line1")}</p>
              <p>{t("steps.insights.line2")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
