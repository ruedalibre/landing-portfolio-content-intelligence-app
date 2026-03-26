import { useTranslation } from "react-i18next";

const CoreInsight = () => {
  const { t } = useTranslation("core_insight");

  return (
    <section id="core-insight" className="core-insight">
      <div className="container core-insight__content">
        <p className="core-insight__pre">{t("insight_pre")}</p>

        <h2 className="core-insight__title">
          {t("insight_title")}{" "}
          <span className="highlight">{t("highlight")}</span>
        </h2>
      </div>
    </section>
  );
};

export default CoreInsight;
