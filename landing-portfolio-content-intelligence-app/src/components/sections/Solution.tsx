import { useTranslation } from 'react-i18next';
import SolutionDiagram from './SolutionDiagram';

const caps = ['c1', 'c2', 'c3', 'c4'] as const;

// Colores por posición — terracota top row, slate bottom row
const dotColor = (index: number) => index < 2 ? '#c47859' : '#364965';

const Solution = () => {
  const { t } = useTranslation('solution');

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">

        <div className="solution__header">
          <span className="section-label">{t('label')}</span>
          <h2 className="solution__title">
            {t('title')} <span className="solution__highlight">{t('highlight')}</span>
          </h2>
          <p className="solution__subtitle">{t('subtitle')}</p>
        </div>

        <SolutionDiagram />

        {/* ── Franja de capabilities ── */}
        <div className="sol-caps">
          <span className="sol-caps__label">{t('caps_label')}</span>
          <div className="sol-caps__grid">
            {caps.map((key, i) => (
              <div key={key} className="sol-caps__pill">
                <span
                  className="sol-caps__dot"
                  style={{ background: dotColor(i) }}
                  aria-hidden="true"
                />
                {t(`caps.${key}`)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
