import { useTranslation } from 'react-i18next';
import SolutionDiagram from './SolutionDiagram';

const Solution = () => {
  const { t } = useTranslation('solution');

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">

        <div className="solution__header">
          <span className="section-label">{t('label')}</span>
          <h2 className="solution__title">
            {t('title')}{' '}
            <span className="solution__highlight">{t('highlight')}</span>
          </h2>
          <p className="solution__subtitle">{t('subtitle')}</p>
        </div>

        <SolutionDiagram />

      </div>
    </section>
  );
};

export default Solution;
