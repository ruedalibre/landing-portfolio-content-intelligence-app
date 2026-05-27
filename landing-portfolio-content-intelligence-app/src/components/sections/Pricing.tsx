import { useTranslation } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const FEATURES_FREE = [
  "feature.ideas10",
  "feature.contentsUnlimited",
  "feature.dashboard",
];

const FEATURES_LOCKED = [
  "feature.briefsTrial",
  "feature.dnaBasic",
  "feature.insightsAI",
  "feature.report",
  "feature.ideaGenerator",
];

const FEATURES_CREATOR = [
  "feature.ideasUnlimited",
  "feature.contentsUnlimited",
  "feature.dashboard",
  "feature.briefsUnlimited",
  "feature.dnaFull",
  "feature.insightsAI",
  "feature.report",
  "feature.ideaGenerator",
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 6V4.5a2 2 0 0 1 4 0V6" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" />
  </svg>
);

const APP_URL = "https://app.content-intel.app";

const Pricing = ({ onRequestAccess }: Props) => {
  const { t } = useTranslation("pricing");

  return (
    <section id="pricing" className="pricing-section reveal">

      <div className="container pricing-section__inner">

        {/* Header */}
        <div className="pricing-section__header">
          <p className="pricing-section__eyebrow">{t("eyebrow")}</p>
          <h2 className="pricing-section__title">{t("title")}</h2>
          <p className="pricing-section__subtitle">{t("subtitle")}</p>
        </div>

        {/* Plans */}
        <div className="pricing-section__plans">

          {/* FREE */}
          <div className="ps-plan">
            <div className="ps-plan__top">
              <p className="ps-plan__name">{t("free")}</p>
              <p className="ps-plan__price">
                $0 <span>{t("forever")}</span>
              </p>
              <p className="ps-plan__sub">&nbsp;</p>
            </div>
            <button
              className="ps-plan__cta ps-plan__cta--secondary"
              type="button"
              onClick={onRequestAccess}
            >
              {t("freeCta")}
            </button>
            <p className="ps-plan__features-label">{t("includes")}</p>
            <ul className="ps-plan__features">
              {FEATURES_FREE.map((key) => (
                <li key={key} className="ps-feature ps-feature--included">
                  <CheckIcon />
                  {t(key)}
                </li>
              ))}
              {FEATURES_LOCKED.map((key) => (
                <li key={key} className="ps-feature ps-feature--locked">
                  <LockIcon />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* CREATOR MENSUAL */}
          <div className="ps-plan ps-plan--featured">
            <div className="ps-plan__badge">{t("flexible")}</div>
            <div className="ps-plan__top">
              <p className="ps-plan__name">{t("creatorMonthly")}</p>
              <p className="ps-plan__price">
                $12 <span>{t("perMonth")}</span>
              </p>
              <p className="ps-plan__sub">{t("monthlySub")}</p>
            </div>
            
              <a href={`${APP_URL}/login`}
              className="ps-plan__cta ps-plan__cta--primary">
            
              {t("trialCta")}
            </a>
            <p className="ps-plan__features-label">{t("everythingFree")}</p>
            <ul className="ps-plan__features">
              {FEATURES_CREATOR.map((key) => (
                <li key={key} className="ps-feature ps-feature--included">
                  <CheckIcon />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* CREATOR ANUAL */}
          <div className="ps-plan ps-plan--featured ps-plan--annual">
            <div className="ps-plan__badge ps-plan__badge--recommended">
              {t("recommended")}
            </div>
            <div className="ps-plan__top">
              <p className="ps-plan__name">{t("creatorAnnual")}</p>
              <div className="ps-plan__price-row">
                <p className="ps-plan__price">
                  $79 <span>{t("perYear")}</span>
                </p>
                <span className="ps-plan__original">$99</span>
              </div>
              <p className="ps-plan__sub ps-plan__sub--saving">
                {t("annualSaving")} · <span className="ps-plan__launch">{t("launchPrice")}</span>
              </p>
            </div>
            
              <a href={`${APP_URL}/login`}
              className="ps-plan__cta ps-plan__cta--accent"
            >
              {t("trialCta")}
            </a>
            <p className="ps-plan__features-label">{t("everythingFree")}</p>
            <ul className="ps-plan__features">
              {FEATURES_CREATOR.map((key) => (
                <li key={key} className="ps-feature ps-feature--included">
                  <CheckIcon />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer note */}
        <p className="pricing-section__note">{t("footer")}</p>

        {/* FAQ */}
        <div className="pricing-section__faq">
          <h3 className="pricing-section__faq-title">{t("faqTitle")}</h3>
          <div className="pricing-section__faq-grid">
            {(["trial", "cancel", "currency", "team"] as const).map((key) => (
              <div key={key} className="pricing-section__faq-item">
                <p className="pricing-section__faq-q">{t(`faq.${key}.q`)}</p>
                <p className="pricing-section__faq-a">{t(`faq.${key}.a`)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;