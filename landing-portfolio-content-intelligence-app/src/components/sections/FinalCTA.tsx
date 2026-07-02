import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useEarlyAccessCount } from '../../hooks/useEarlyAccessCount';
import { useAnimatedCount } from '../../hooks/useAnimatedCount';

type Props = {
  onRequestAccess: () => void;
};

const guarantees = ['guarantee_1', 'guarantee_2', 'guarantee_3'] as const;

const FinalCTA = ({ onRequestAccess }: Props) => {
  const { t } = useTranslation('final_cta');
  const earlyUsers = useEarlyAccessCount();
  const displayCount = Math.max(earlyUsers ?? 0, 12);
  const animatedCount = useAnimatedCount(displayCount);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!earlyUsers) return;
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 400);
    return () => clearTimeout(timer);
  }, [earlyUsers]);

  return (
    <section id="contact" className="final-cta">

      {/* Franja degradada superior */}
      <div className="final-cta__band" aria-hidden="true" />

      {/* Gradientes de textura */}
      <div className="final-cta__bg" aria-hidden="true" />

      <div className="container final-cta__inner">

        <p className="final-cta__eyebrow">{t('eyebrow')}</p>

        <h2 className="final-cta__title">
          {t('title')}<br />
          <span className="final-cta__highlight">{t('highlight')}</span>
        </h2>

        <p className="final-cta__subtitle">
          {t('subtitle')}{' '}
          <strong>{t('subtitle_strong')}</strong>
        </p>

        {/* Social proof */}
        <div className="final-cta__proof">
          <div className="final-cta__avatars" aria-hidden="true">
            <span className="final-cta__avatar final-cta__avatar--1">V</span>
            <span className="final-cta__avatar final-cta__avatar--2">C</span>
            <span className="final-cta__avatar final-cta__avatar--3">A</span>
          </div>
          <p className="final-cta__proof-text">
            <Trans
              i18nKey="social_proof"
              ns="final_cta"
              values={{ count: animatedCount }}
              components={{
                strong: <strong className={pulse ? 'count-pulse' : ''} />,
              }}
            />
          </p>
        </div>

        {/* Botones */}
        <div className="final-cta__actions">
          <button
            className="btn btn--cta-primary"
            onClick={onRequestAccess}
            type="button"
          >
            {t('cta_primary')}
          </button>
          <a href="#how-it-works" className="btn btn--cta-secondary">
            {t('cta_secondary')}
          </a>
        </div>

        {/* Garantías */}
        <div className="final-cta__guarantees">
          {guarantees.map((key) => (
            <div key={key} className="final-cta__guarantee">
              <span className="final-cta__guarantee-dot" aria-hidden="true" />
              {t(key)}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="final-cta__divider" aria-hidden="true" />

        {/* Legal */}
        <div className="final-cta__legal">
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <span aria-hidden="true">·</span>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span aria-hidden="true">·</span>
          <span>© 2026 Creadora</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
