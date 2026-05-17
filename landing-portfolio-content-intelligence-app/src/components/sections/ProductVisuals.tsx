import { useTranslation } from 'react-i18next';

const MockCapture = () => (
  <div className="pv-mock">
    <div className="pv-mock__bar">
      <span className="pv-mock__dot pv-mock__dot--red" />
      <span className="pv-mock__dot pv-mock__dot--yellow" />
      <span className="pv-mock__dot pv-mock__dot--green" />
      <span className="pv-mock__bar-title">Nueva idea</span>
    </div>
    <div className="pv-mock__body">
      <div className="pv-field">
        <span className="pv-field__label">Título de la idea</span>
        <div className="pv-field__val">Cómo construyo mis recetas de viaje</div>
      </div>
      <div className="pv-field-row">
        <div className="pv-field">
          <span className="pv-field__label">Plataforma</span>
          <div className="pv-field__val">YouTube</div>
        </div>
        <div className="pv-field">
          <span className="pv-field__label">Formato</span>
          <div className="pv-field__val">Video largo</div>
        </div>
      </div>
      <div className="pv-field-row">
        <div className="pv-field">
          <span className="pv-field__label">Rol</span>
          <div className="pv-field__val">Educativo</div>
        </div>
        <div className="pv-field">
          <span className="pv-field__label">Tema</span>
          <div className="pv-field__val">Gastronomía</div>
        </div>
      </div>
      <div className="pv-tags">
        <span className="pv-tag pv-tag--terracota">Proceso creativo</span>
        <span className="pv-tag pv-tag--neutral">Viajes</span>
        <span className="pv-tag pv-tag--neutral">Cocina</span>
      </div>
    </div>
  </div>
);

const MockBrief = () => (
  <div className="pv-mock">
    <div className="pv-mock__bar">
      <span className="pv-mock__dot pv-mock__dot--red" />
      <span className="pv-mock__dot pv-mock__dot--yellow" />
      <span className="pv-mock__dot pv-mock__dot--green" />
      <span className="pv-mock__bar-title">Brief generado</span>
    </div>
    <div className="pv-mock__body">
      <div className="pv-brief__header">
        <span className="pv-brief__title">Cómo construyo mis recetas de viaje</span>
        <span className="pv-tag pv-tag--terracota">YouTube · Video largo</span>
      </div>
      <div className="pv-brief__block">
        <div className="pv-brief__block-label">Objetivo</div>
        <div className="pv-brief__block-text">Mostrar el proceso detrás de cada receta de viaje — desde la investigación hasta la cocina en destino.</div>
      </div>
      <div className="pv-brief__block">
        <div className="pv-brief__block-label">Estructura sugerida</div>
        <div className="pv-brief__block-text">Intro en destino → ingredientes locales → proceso → resultado + reflexión personal</div>
      </div>
      <div className="pv-brief__block">
        <div className="pv-brief__block-label">Tono</div>
        <div className="pv-brief__block-text">Cercano, narrativo, con momentos de humor y autenticidad</div>
      </div>
      <div className="pv-brief__actions">
        <button className="pv-brief__btn pv-brief__btn--secondary">Otra alternativa</button>
        <button className="pv-brief__btn pv-brief__btn--primary">Usar este brief</button>
      </div>
    </div>
  </div>
);

const MockInsights = () => {
  const bars = [
    { label: 'Gastronomía',     pct: 82, color: '#c47859', opacity: 1   },
    { label: 'Viajes',          pct: 64, color: '#c47859', opacity: 0.7 },
    { label: 'Proceso creativo',pct: 41, color: '#364965', opacity: 0.6 },
    { label: 'Cultura local',   pct: 28, color: '#364965', opacity: 0.4 },
  ];

  return (
    <div className="pv-mock">
      <div className="pv-mock__bar">
        <span className="pv-mock__dot pv-mock__dot--red" />
        <span className="pv-mock__dot pv-mock__dot--yellow" />
        <span className="pv-mock__dot pv-mock__dot--green" />
        <span className="pv-mock__bar-title">Tu ADN creativo</span>
      </div>
      <div className="pv-mock__body">
        <div className="pv-insights__section-label">Temas dominantes</div>
        {bars.map((bar) => (
          <div key={bar.label} className="pv-insights__row">
            <span className="pv-insights__label">{bar.label}</span>
            <div className="pv-insights__bar-wrap">
              <div
                className="pv-insights__bar"
                style={{
                  width: `${bar.pct}%`,
                  background: bar.color,
                  opacity: bar.opacity,
                }}
              />
            </div>
            <span className="pv-insights__pct">{bar.pct}%</span>
          </div>
        ))}
        <div className="pv-insights__opportunity">
          <div className="pv-insights__section-label">Oportunidad detectada</div>
          <div className="pv-insights__opportunity-text">
            Tienes 3 ideas sobre cultura local sin explorar. Es un ángulo que conecta con tus temas dominantes.
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductVisuals = () => {
  const { t } = useTranslation('product_visuals');

  return (
    <section id="product" className="product-visuals reveal">
      <div className="container product-visuals__content">

        <div className="product-visuals__header">
          <span className="section-label">{t('label')}</span>
          <h2 className="product-visuals__title">
            {t('title')}{' '}
            <span className="product-visuals__highlight">{t('highlight')}</span>
          </h2>
        </div>

        <div className="product-visuals__list">

          {/* Item 1 — mock izq, texto der */}
          <div className="pv-item">
            <MockCapture />
            <div className="pv-item__text">
              <span className="pv-item__num">{t('items.capture.num')}</span>
              <h3 className="pv-item__title">{t('items.capture.title')}</h3>
              <p className="pv-item__body">
                {t('items.capture.body')} <strong>{t('items.capture.body_strong')}</strong> {t('items.capture.body_end')}
              </p>
            </div>
          </div>

          {/* Item 2 — texto izq, mock der */}
          <div className="pv-item pv-item--reverse">
            <MockBrief />
            <div className="pv-item__text">
              <span className="pv-item__num">{t('items.brief.num')}</span>
              <h3 className="pv-item__title">{t('items.brief.title')}</h3>
              <p className="pv-item__body">
                {t('items.brief.body')} <strong>{t('items.brief.body_strong')}</strong> {t('items.brief.body_end')}
              </p>
            </div>
          </div>

          {/* Item 3 — mock izq, texto der */}
          <div className="pv-item">
            <MockInsights />
            <div className="pv-item__text">
              <span className="pv-item__num">{t('items.insights.num')}</span>
              <h3 className="pv-item__title">{t('items.insights.title')}</h3>
              <p className="pv-item__body">
                {t('items.insights.body')} <strong>{t('items.insights.body_strong')}</strong> {t('items.insights.body_end')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;
