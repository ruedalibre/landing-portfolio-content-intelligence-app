import heroImage from "../../assets/images/heroImage.png";
import { useEarlyAccessCount } from "../../hooks/useEarlyAccessCount.ts";
import { useAnimatedCount } from "../../hooks/useAnimatedCount.ts";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const Hero = ({ onRequestAccess }: Props) => {
  const { t } = useTranslation("hero");
  const earlyUsers = useEarlyAccessCount();
  const displayCount = Math.max(earlyUsers ?? 0, 12);
  const animatedCount = useAnimatedCount(displayCount);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(true);

      setTimeout(() => setPulse(false), 400);
    }, 500);

    return () => clearTimeout(timer);
  }, [displayCount]);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            {t("title")} <span className="highlight">{t("highlight")}</span>
          </h1>

          <p className="hero__subtitle">{t("value_statement")}</p>

          <div className="hero__cta">
            <button
              className="btn btn--primary"
              onClick={onRequestAccess}
              type="button"
            >
              {t("cta_primary")}
            </button>

            <a href="#contact" className="btn btn--secondary">
              {t("cta_secondary")}
            </a>
          </div>

          <div className="hero__proof">
            <p className="hero__social-proof">
              <Trans
                i18nKey="social_proof"
                ns="hero"
                values={{ count: animatedCount }}
                components={{
                  strong: <strong className={pulse ? "count-pulse" : ""} />,
                }}
              />
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <img src={heroImage} alt={t("image_alt")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
