import { useTranslation } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const FinalCTA = ({ onRequestAccess }: Props) => {
  const { t } = useTranslation("final_cta");

  return (
    <section id="contact" className="cta reveal">
      <div className="container cta__content">
        <h2 className="cta__title">{t("title")}</h2>

        <p className="cta__subtitle">{t("subtitle")}</p>

        <div className="cta__actions">
          <button className="btn btn--primary" onClick={onRequestAccess}>
            {t("cta_primary")}
          </button>

          <a href="#how-it-works" className="btn btn--secondary">
            {t("cta_secondary")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
