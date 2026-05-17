import { useTranslation } from 'react-i18next';

/*
  Coordenadas del SVG — viewBox 0 0 680 520
  ─────────────────────────────────────────
  N1 Captura:      x:210  y:10   w:260  h:100  mid-right:(470,60)   mid-left:(210,60)
  N2 Producción:   x:500  y:150  w:168  h:160  mid-top:(584,150)    mid-bottom:(584,310)
  N3 Inteligencia: x:210  y:400  w:260  h:110  mid-right:(470,455)  mid-left:(210,455)
  N4 Evolución:    x:12   y:150  w:168  h:160  mid-top:(96,150)     mid-bottom:(96,310)

  Edges (perímetro rectangular):
  1→2: N1 right (470,60)  → N2 top    (584,150)  — H luego V
  2→3: N2 bottom (584,310) → N3 right (470,455)  — V luego H
  3→4: N3 left  (210,455) → N4 bottom (96,310)   — H luego V
  4→1: N4 top   (96,150)  → N1 left   (210,60)   — V luego H
*/

const SolutionDiagram = () => {
  const { t } = useTranslation('solution');

  return (
    <div className="sol-diagram">
      <svg
        width="100%"
        viewBox="0 0 680 520"
        role="img"
        aria-label={t('label')}
      >
        <defs>
          <marker id="arr-t" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#c47859"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="arr-s" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#364965"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>

          {/* clipPaths — recortan la barra de acento al rx:12 de cada nodo */}
          <clipPath id="clip-n1"><rect x="210" y="10"  width="260" height="100" rx="12"/></clipPath>
          <clipPath id="clip-n2"><rect x="500" y="150" width="168" height="160" rx="12"/></clipPath>
          <clipPath id="clip-n3"><rect x="210" y="400" width="260" height="110" rx="12"/></clipPath>
          <clipPath id="clip-n4"><rect x="12"  y="150" width="168" height="160" rx="12"/></clipPath>
        </defs>

        {/* ── N1 CAPTURA — arriba centro ── */}
        <rect x="210" y="10" width="260" height="100" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="210" y="10" width="4" height="100"
          fill="#c47859" clipPath="url(#clip-n1)"/>
        <text x="228" y="40"  fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n1.title')}</text>
        <text x="228" y="62"  fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n1.desc1')}</text>
        <text x="228" y="78"  fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n1.desc2')}</text>

        {/* ── N2 PRODUCCIÓN — derecha ── */}
        <rect x="500" y="150" width="168" height="160" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="500" y="150" width="4" height="160"
          fill="#c47859" clipPath="url(#clip-n2)"/>
        <text x="518" y="180" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n2.title')}</text>
        <text x="518" y="208" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc1')}</text>
        <text x="518" y="224" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc2')}</text>
        <text x="518" y="240" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc3')}</text>

        {/* ── N3 INTELIGENCIA — abajo centro ── */}
        <rect x="210" y="400" width="260" height="110" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="210" y="400" width="4" height="110"
          fill="#364965" clipPath="url(#clip-n3)"/>
        <text x="228" y="430" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n3.title')}</text>
        <text x="228" y="455" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc1')}</text>
        <text x="228" y="471" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc2')}</text>
        <text x="228" y="487" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc3')}</text>

        {/* ── N4 EVOLUCIÓN — izquierda ── */}
        <rect x="12" y="150" width="168" height="160" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="12" y="150" width="4" height="160"
          fill="#364965" clipPath="url(#clip-n4)"/>
        <text x="30" y="180" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n4.title')}</text>
        <text x="30" y="208" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc1')}</text>
        <text x="30" y="224" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc2')}</text>
        <text x="30" y="240" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc3')}</text>

        {/* ── EDGES — perímetro rectangular exacto ── */}

        {/* 1→2: N1 right (470,60) → N2 top (584,150) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 470 60 L 584 60 L 584 148"
          markerEnd="url(#arr-t)"/>

        {/* 2→3: N2 bottom (584,310) → N3 right (470,455) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 584 310 L 584 455 L 472 455"
          markerEnd="url(#arr-t)"/>

        {/* 3→4: N3 left (210,455) → N4 bottom (96,310) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 208 455 L 96 455 L 96 312"
          markerEnd="url(#arr-s)"/>

        {/* 4→1: N4 top (96,150) → N1 left (210,60) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 96 148 L 96 60 L 208 60"
          markerEnd="url(#arr-s)"/>

      </svg>
    </div>
  );
};

export default SolutionDiagram;
