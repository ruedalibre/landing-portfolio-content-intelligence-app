import heroImage from "../../assets/images/dashboard.png";
import { useEarlyAccessCount } from "../../hooks/useEarlyAccessCoutn.ts";
import { useAnimatedCount } from "../../hooks/useAnimatedCount.ts";
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

type Props = {
  onRequestAccess: () => void;
};

const Hero = ({ onRequestAccess }: Props) => {
  // const { t } = useTranslation("landing");
  const earlyUsers = useEarlyAccessCount();
  const displayCount = Math.max(earlyUsers ?? 0, 12);
  const animatedCount = useAnimatedCount(displayCount);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulse(true);

      setTimeout(() => setPulse(false), 400);
    }, 500); // espera a que termine el count animation

    return () => clearTimeout(timer);
  }, [displayCount]);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Turn your content into a scalable system{" "}
            <span className="highlight">
              Understand what works. Reuse your best ideas.
            </span>
          </h1>

          <p className="hero__subtitle">
            A content intelligence platform for creators and teams.
          </p>

          <div className="hero__cta">
            <button className="btn btn--primary" onClick={onRequestAccess}>
              Join early access
            </button>

            <a href="#contact" className="btn btn--secondary">
              Let’s connect
            </a>
          </div>
          <div className="hero__proof">
            <p className="hero__social-proof">
              Join{" "}
              <strong className={pulse ? "count-pulse" : ""}>
                {animatedCount}+
              </strong>{" "}
              creators exploring content intelligence
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <img src={heroImage} alt="Dashboard preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
