import { useTranslation } from "react-i18next";

const WhyItMatters = () => {
  const { t } = useTranslation("why_it_matters");

  return (
    <section id="why-it-matters" className="why reveal">
      <div className="container why__content">
        <h2 className="why__title">{t("title")}</h2>

        <p className="why__subtitle">{t("subtitle")}</p>

        <p className="why__text">{t("text")}</p>
      </div>
    </section>
  );
};

export default WhyItMatters;
