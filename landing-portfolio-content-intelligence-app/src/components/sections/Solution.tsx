import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SolutionDiagram from './SolutionDiagram';

const MOBILE_STEPS = [
  {
    num: '1',
    phase: 'Captura',
    title: 'Captura tus ideas',
    body: 'En el momento en que aparecen. Sin fricciones. Sin estructura forzada.',
    accent: 'terracota',
  },
  {
    num: '2',
    phase: 'Producción',
    title: 'Convierte tu idea en contenido',
    body: 'Elige una idea, define para quién y dónde. La plataforma genera un brief adaptado a ti para que puedas producir sin empezar desde cero.',
    accent: 'terracota',
  },
  {
    num: '3',
    phase: 'Inteligencia',
    title: 'Insights y tu ADN creativo',
    body: 'Descubre oportunidades para evolucionar con los temas, formatos y ritmos que funcionan mejor para ti.',
    accent: 'slate',
  },
  {
    num: '4',
    phase: 'Evolución',
    title: 'La plataforma crece contigo',
    body: 'Mientras más creas, mejor te conoce. Sacas más provecho de tu contenido con menos esfuerzo.',
    accent: 'slate',
  },
] as const;

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
            {MOBILE_STEPS.map((item) => (
              <div key={item.num} className={`sol-list__item sol-list__item--${item.accent}`}>
                <span className="sol-list__phase">{item.num} · {item.phase}</span>
                <h4 className="sol-list__title">{item.title}</h4>
                <p className="sol-list__body">{item.body}</p>
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
