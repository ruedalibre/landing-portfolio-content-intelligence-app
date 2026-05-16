import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type StepKey = 'capture' | 'convert' | 'insights' | 'grow';

const STEP_KEYS: StepKey[] = ['capture', 'convert', 'insights', 'grow'];

const SolutionDiagram = () => {
  const { t } = useTranslation('solution');
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // capture and insights use title_line1 + title_line2; convert and grow use title
  const getTitle = (key: StepKey) =>
    key === 'capture' || key === 'insights'
      ? `${t(`steps.${key}.title_line1`)} ${t(`steps.${key}.title_line2`)}`
      : t(`steps.${key}.title`);

  // ── Mobile: vertical card list ──────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="sol-list">
        {STEP_KEYS.map((key, i) => (
          <div
            key={key}
            className={`sol-list__item sol-list__item--${i < 2 ? 'terracota' : 'slate'}`}
          >
            <span className="sol-list__phase">{t(`steps.${key}.phase`)}</span>
            <h4 className="sol-list__title">{getTitle(key)}</h4>
            <p className="sol-list__body">
              {t(`steps.${key}.body1`)} {t(`steps.${key}.body2`)}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // ── Desktop: inline SVG loop diagram ───────────────────────────────────────
  return (
    <div className="sol-diagram">
      <svg
        width="100%"
        viewBox="0 0 680 380"
        role="img"
        aria-label="Diagrama del loop creativo de Content Intelligence"
      >
        <title>Loop creativo de Content Intelligence</title>
        <desc>
          Cuatro nodos en ciclo: Captura a la izquierda, Producción arriba,
          Inteligencia a la derecha, Evolución abajo.
        </desc>

        <defs>
          <marker id="arr-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#c47859" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="arr-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#364965" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* ── NODO IZQUIERDO — Captura (x:20, y:80, w:168, h:210) ── */}
        <rect x="20" y="80" width="168" height="210" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1" />
        <rect x="20" y="80" width="3" height="210" rx="1.5" fill="#c47859" />
        <text x="38" y="118" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">{t('steps.capture.phase')}</text>
        <text x="38" y="142" fontFamily="var(--font-sans)" fontSize="14" fontWeight="500" fill="var(--text)">{t('steps.capture.title_line1')}</text>
        <text x="38" y="160" fontFamily="var(--font-sans)" fontSize="14" fontWeight="500" fill="var(--text)">{t('steps.capture.title_line2')}</text>
        <text x="38" y="186" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.capture.body1')}</text>
        <text x="38" y="202" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.capture.body2')}</text>
        <text x="38" y="218" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.capture.body3')}</text>
        <text x="38" y="234" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.capture.body4')}</text>
        <text x="38" y="250" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.capture.body5')}</text>

        {/* ── NODO DERECHO — Inteligencia (x:492, y:80, w:168, h:210) ── */}
        <rect x="492" y="80" width="168" height="210" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1" />
        <rect x="492" y="80" width="3" height="210" rx="1.5" fill="#364965" />
        <text x="510" y="118" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">{t('steps.insights.phase')}</text>
        <text x="510" y="142" fontFamily="var(--font-sans)" fontSize="14" fontWeight="500" fill="var(--text)">{t('steps.insights.title_line1')}</text>
        <text x="510" y="160" fontFamily="var(--font-sans)" fontSize="14" fontWeight="500" fill="var(--text)">{t('steps.insights.title_line2')}</text>
        <text x="510" y="186" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.insights.body1')}</text>
        <text x="510" y="202" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.insights.body2')}</text>
        <text x="510" y="218" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.insights.body3')}</text>
        <text x="510" y="234" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.insights.body4')}</text>
        <text x="510" y="250" fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">{t('steps.insights.body5')}</text>

        {/* ── NODO SUPERIOR — Producción (x:224, y:20, w:232, h:90) ── */}
        <rect x="224" y="20" width="232" height="90" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1" />
        <rect x="224" y="20" width="3" height="90" rx="1.5" fill="#c47859" />
        <text x="242" y="48" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">{t('steps.convert.phase')}</text>
        <text x="242" y="68" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('steps.convert.title')}</text>
        <text x="242" y="86" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('steps.convert.body')}</text>

        {/* ── NODO INFERIOR — Evolución (x:224, y:260, w:232, h:100) ── */}
        <rect x="224" y="260" width="232" height="100" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1" />
        <rect x="224" y="260" width="3" height="100" rx="1.5" fill="#364965" />
        <text x="242" y="288" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">{t('steps.grow.phase')}</text>
        <text x="242" y="308" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('steps.grow.title')}</text>
        <text x="242" y="326" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('steps.grow.body1')}</text>
        <text x="242" y="342" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('steps.grow.body2')}</text>

        {/* ── EDGES — perímetro rectangular exacto ── */}

        {/* 1→2: Captura top → Producción left (terracota) */}
        <path
          d="M 104 80 L 104 36 L 222 36"
          fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-t)"
          className="sol-edge sol-edge--t"
        />

        {/* 2→3: Producción right → Inteligencia top (terracota) */}
        <path
          d="M 456 65 L 576 65 L 576 78"
          fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-t)"
          className="sol-edge sol-edge--t sol-edge--delay"
        />

        {/* 3→4: Inteligencia bottom → Evolución right (slate) */}
        <path
          d="M 576 290 L 576 310 L 458 310"
          fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-s)"
          className="sol-edge sol-edge--s"
        />

        {/* 4→1: Evolución left → Captura bottom (slate) */}
        <path
          d="M 222 310 L 104 310 L 104 292"
          fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#arr-s)"
          className="sol-edge sol-edge--s sol-edge--delay"
        />
      </svg>
    </div>
  );
};

export default SolutionDiagram;
