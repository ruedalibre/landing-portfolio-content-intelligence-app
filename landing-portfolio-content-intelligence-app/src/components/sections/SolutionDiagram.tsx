import { useTranslation } from 'react-i18next';

/*
  Coordenadas del SVG — viewBox 0 0 740 560
  ─────────────────────────────────────────
  Todos los nodos: width=280 height=140

  N1 Captura:      x:230  y:15   → center-x:370  mid-right:(510,85)   mid-left:(230,85)
  N2 Producción:   x:450  y:210  → center-x:590  mid-top:(590,210)    mid-bottom:(590,350)
  N3 Inteligencia: x:230  y:405  → center-x:370  mid-right:(510,475)  mid-left:(230,475)
  N4 Evolución:    x:10   y:210  → center-x:150  mid-top:(150,210)    mid-bottom:(150,350)

  Edges (perímetro rectangular):
  1→2: N1 right (510,85)   → corner (590,85)   → N2 top    (590,210)  — H luego V
  2→3: N2 bottom (590,350) → corner (590,475)  → N3 right  (510,475)  — V luego H
  3→4: N3 left  (230,475)  → corner (150,475)  → N4 bottom (150,350)  — H luego V
  4→1: N4 top   (150,210)  → corner (150,85)   → N1 left   (230,85)   — V luego H
*/

const SolutionDiagram = () => {
  const { t } = useTranslation('solution');

  return (
    <div className="sol-diagram">
      <svg
        width="100%"
        viewBox="0 0 740 560"
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
          <clipPath id="clip-n1"><rect x="230" y="15"  width="280" height="140" rx="12"/></clipPath>
          <clipPath id="clip-n2"><rect x="450" y="210" width="280" height="140" rx="12"/></clipPath>
          <clipPath id="clip-n3"><rect x="230" y="405" width="280" height="140" rx="12"/></clipPath>
          <clipPath id="clip-n4"><rect x="10"  y="210" width="280" height="140" rx="12"/></clipPath>
        </defs>

        {/* ── N1 CAPTURA — arriba centro ── */}
        <rect x="230" y="15" width="280" height="140" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="230" y="15" width="4" height="140"
          fill="#c47859" clipPath="url(#clip-n1)"/>
        <text x="370" y="48"  textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n1.title')}</text>
        <text x="370" y="72"  textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n1.desc1')}</text>
        <text x="370" y="88"  textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n1.desc2')}</text>

        {/* ── N2 PRODUCCIÓN — derecha ── */}
        <rect x="450" y="210" width="280" height="140" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="450" y="210" width="4" height="140"
          fill="#c47859" clipPath="url(#clip-n2)"/>
        <text x="590" y="243" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n2.title')}</text>
        <text x="590" y="267" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc1')}</text>
        <text x="590" y="283" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc2')}</text>
        <text x="590" y="299" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n2.desc3')}</text>

        {/* ── N3 INTELIGENCIA — abajo centro ── */}
        <rect x="230" y="405" width="280" height="140" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="230" y="405" width="4" height="140"
          fill="#364965" clipPath="url(#clip-n3)"/>
        <text x="370" y="438" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n3.title')}</text>
        <text x="370" y="462" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc1')}</text>
        <text x="370" y="478" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc2')}</text>
        <text x="370" y="494" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n3.desc3')}</text>

        {/* ── N4 EVOLUCIÓN — izquierda ── */}
        <rect x="10" y="210" width="280" height="140" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="10" y="210" width="4" height="140"
          fill="#364965" clipPath="url(#clip-n4)"/>
        <text x="150" y="243" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">{t('nodes.n4.title')}</text>
        <text x="150" y="267" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc1')}</text>
        <text x="150" y="283" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc2')}</text>
        <text x="150" y="299" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">{t('nodes.n4.desc3')}</text>

        {/* ── EDGES — perímetro rectangular exacto ── */}

        {/* 1→2: N1 right (510,85) → corner (590,85) → N2 top (590,210) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 510 85 L 590 85 L 590 208"
          markerEnd="url(#arr-t)"/>

        {/* 2→3: N2 bottom (590,350) → corner (590,475) → N3 right (510,475) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 590 350 L 590 475 L 512 475"
          markerEnd="url(#arr-t)"/>

        {/* 3→4: N3 left (230,475) → corner (150,475) → N4 bottom (150,350) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 228 475 L 150 475 L 150 352"
          markerEnd="url(#arr-s)"/>

        {/* 4→1: N4 top (150,210) → corner (150,85) → N1 left (230,85) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 150 208 L 150 85 L 228 85"
          markerEnd="url(#arr-s)"/>

      </svg>
    </div>
  );
};

export default SolutionDiagram;
