import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation("vision");

  return (
    <section id="vision" className="vision reveal">
      <div className="container vision__content">
        <p className="vision__eyebrow">{t("eyebrow")}</p>

        <h2 className="vision__title">
          {t("title_line_1")}
          <br />
          {t("title_line_2")} <span>{t("highlight")}</span>
        </h2>

        <p className="vision__manifesto">{t("manifesto")}</p>
      </div>
    </section>
  );
};

export default Vision;
