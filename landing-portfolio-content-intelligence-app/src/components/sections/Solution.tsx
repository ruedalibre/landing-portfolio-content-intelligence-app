import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SolutionDiagram from './SolutionDiagram';

type NodeKey = 'n1' | 'n2' | 'n3' | 'n4';
const NODE_KEYS: NodeKey[] = ['n1', 'n2', 'n3', 'n4'];

const Solution = () => {
  const { t } = useTranslation('solution');
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

        {isMobile ? (
          <div className="sol-list">
            {NODE_KEYS.map((key, i) => (
              <div key={key} className={`sol-list__item sol-list__item--${i < 2 ? 'terracota' : 'slate'}`}>
                <h4 className="sol-list__title">{t(`nodes.${key}.title`)}</h4>
                <p className="sol-list__body">
                  {t(`nodes.${key}.desc1`)}{' '}
                  {t(`nodes.${key}.desc2`)}{' '}
                  {t(`nodes.${key}.desc3`, '')}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <SolutionDiagram />
        )}

      </div>
    </section>
  );
};

export default Solution;
