import { useTranslation } from "react-i18next";

const principles = ["p1", "p2", "p3", "p4"] as const;

const Manifesto = () => {
  const { t } = useTranslation("manifesto");

  return (
    <section id="manifesto" className="manifesto reveal">
      <div className="manifesto__bg" aria-hidden="true" />

      <div className="container manifesto__inner">

        {/* Eyebrow */}
        <p className="manifesto__eyebrow">{t("eyebrow")}</p>

        {/* Título */}
        <h2 className="manifesto__title">
          {t("title_line1")}<br />
          {t("title_line2")}<br />
          <span className="manifesto__highlight">{t("title_highlight")}</span>
        </h2>

        {/* Principios */}
        <div className="manifesto__principles">
          {principles.map((key, i) => (
            <div key={key} className="manifesto__principle">
              <span className="manifesto__num">0{i + 1}</span>
              <div className="manifesto__principle-body">
                <span className="manifesto__principle-title">
                  {t(`principles.${key}.title`)}
                </span>
                <p className="manifesto__principle-text">
                  {t(`principles.${key}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="manifesto__closing">
          <blockquote className="manifesto__quote">
            "{t("closing_quote")}"
          </blockquote>
          <p className="manifesto__attribution">{t("closing_attribution")}</p>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;
