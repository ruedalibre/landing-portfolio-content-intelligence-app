import dashboardImage from "../../assets/images/dashboardImage.png";
import ideasImage from "../../assets/images/ideasImage.png";
import contentsImage from "../../assets/images/contentsImage.png";
import { useTranslation } from "react-i18next";

const visuals = [
  { key: "capture", image: contentsImage, reverse: false },
  { key: "insights", image: dashboardImage, reverse: true },
  { key: "systems", image: ideasImage, reverse: false },
];

const ProductVisuals = () => {
  const { t } = useTranslation("product_visuals");

  return (
    <section id="product" className="product-visuals reveal">
      <div className="container product-visuals__content">
        <h2 className="product-visuals__title">{t("title")}</h2>

        <div className="product-visuals__list">
          {visuals.map((item) => (
            <div
              key={item.key}
              className={`product-visuals__item ${item.reverse ? "reverse" : ""}`}
            >
              <div className="product-visuals__text">
                <h3>{t(`items.${item.key}.title`)}</h3>
                <p>{t(`items.${item.key}.description`)}</p>
              </div>

              <div className="product-visuals__image">
                <img src={item.image} alt={t(`items.${item.key}.image_alt`)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;
