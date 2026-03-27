import { useTranslation } from "react-i18next";

const NorthStar = () => {
  const { t } = useTranslation("north_star");

  return (
    <section id="north-star" className="north-star reveal">
      <div className="container north-star__content">
        <p className="north-star__label">{t("label")}</p>

        <h2 className="north-star__title">
          {t("title_prefix")}{" "}
          <span className="highlight">{t("highlight")}</span>
        </h2>

        <p className="north-star__description">{t("description")}</p>
      </div>
    </section>
  );
};

export default NorthStar;
