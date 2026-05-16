import { useTranslation } from 'react-i18next';

const SolutionDiagram = () => {
  const { t } = useTranslation('solution');

  return (
    <div className="sol-diagram" aria-label="Diagrama del loop creativo de Content Intelligence">
      <svg
        className="sol-diagram__svg"
        viewBox="0 0 900 440"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <marker id="arr-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#c47859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="arr-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#364965" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/*
          Layout (viewBox 900×440):
          Nodo 1 (Captura)      — x:60,  y:40,  w:340, h:140  → centro y:110
          Nodo 2 (Producción)   — x:500, y:40,  w:340, h:140  → centro y:110
          Nodo 3 (Inteligencia) — x:500, y:280, w:340, h:140  → centro y:350
          Nodo 4 (Evolución)    — x:60,  y:280, w:340, h:140  → centro y:350

          Rutas perimetrales:
          1→2 (terracota): horizontal top     — y=110, x: 400→500
          2→3 (terracota): vertical exterior  — x=870, y: 110→350
          3→4 (slate):     horizontal bottom  — y=350, x: 500→400
          4→1 (slate):     vertical exterior  — x=30,  y: 350→110
        */}

        {/* EDGE 1→2 — top horizontal — terracota */}
        <line
          x1="400" y1="110"
          x2="494" y2="110"
          stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-t)"
          className="sol-edge sol-edge--t"
        />

        {/* EDGE 2→3 — right vertical exterior — terracota */}
        <polyline
          points="840,110 870,110 870,350 846,350"
          fill="none"
          stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-t)"
          className="sol-edge sol-edge--t"
          style={{ animationDelay: '0.6s' }}
        />

        {/* EDGE 3→4 — bottom horizontal — slate */}
        <line
          x1="500" y1="350"
          x2="406" y2="350"
          stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-s)"
          className="sol-edge sol-edge--s"
          style={{ animationDelay: '1.2s' }}
        />

        {/* EDGE 4→1 — left vertical exterior — slate */}
        <polyline
          points="60,350 30,350 30,110 54,110"
          fill="none"
          stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-s)"
          className="sol-edge sol-edge--s"
          style={{ animationDelay: '1.8s' }}
        />
      </svg>

      {/* Cards HTML — posicionadas absolutamente sobre el SVG */}
      <div className="sol-diagram__cards">

        {/* Nodo 1 — top left */}
        <div className="sol-card sol-card--terracota sol-card--tl">
          <span className="sol-card__phase">{t('steps.capture.phase')}</span>
          <h4 className="sol-card__title">{t('steps.capture.title')}</h4>
          <p className="sol-card__body">{t('steps.capture.line1')} {t('steps.capture.line2')}</p>
        </div>

        {/* Nodo 2 — top right */}
        <div className="sol-card sol-card--terracota sol-card--tr">
          <span className="sol-card__phase">{t('steps.convert.phase')}</span>
          <h4 className="sol-card__title">{t('steps.convert.title')}</h4>
          <p className="sol-card__body">{t('steps.convert.line1')} {t('steps.convert.line2')}</p>
        </div>

        {/* Nodo 3 — bottom right */}
        <div className="sol-card sol-card--slate sol-card--br">
          <span className="sol-card__phase">{t('steps.insights.phase')}</span>
          <h4 className="sol-card__title">{t('steps.insights.title')}</h4>
          <p className="sol-card__body">{t('steps.insights.line1')} {t('steps.insights.line2')}</p>
        </div>

        {/* Nodo 4 — bottom left */}
        <div className="sol-card sol-card--slate sol-card--bl">
          <span className="sol-card__phase">{t('steps.grow.phase')}</span>
          <h4 className="sol-card__title">{t('steps.grow.title')}</h4>
          <p className="sol-card__body">{t('steps.grow.line1')} {t('steps.grow.line2')}</p>
        </div>

      </div>
    </div>
  );
};

export default SolutionDiagram;
