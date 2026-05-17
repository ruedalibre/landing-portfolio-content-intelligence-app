import { useTranslation } from 'react-i18next';

const SolutionDiagram = () => {
  const { t } = useTranslation('solution');

  return (
    <div className="sol-diagram">
      <svg
        width="100%"
        viewBox="0 0 740 480"
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

          {/*
            Coordenadas definitivas — NO modificar sin consultar
            N1 Captura:      x:230 y:20  w:280 h:110  mid-right:(510,75)  mid-left:(230,75)
            N2 Producción:   x:440 y:175 w:280 h:130  mid-top:(580,175)   mid-bottom:(580,305)
            N3 Inteligencia: x:230 y:340 w:280 h:120  mid-right:(510,400) mid-left:(230,400)
            N4 Evolución:    x:20  y:175 w:280 h:130  mid-top:(160,175)   mid-bottom:(160,305)

            Edges perímetro:
            1→2: (510,75)  → L(580,75)  → L(580,173)
            2→3: (580,307) → L(580,400) → L(512,400)
            3→4: (228,400) → L(160,400) → L(160,307)
            4→1: (160,173) → L(160,75)  → L(228,75)
          */}

          <clipPath id="clip-n1"><rect x="230" y="20"  width="280" height="110" rx="12"/></clipPath>
          <clipPath id="clip-n2"><rect x="440" y="175" width="280" height="130" rx="12"/></clipPath>
          <clipPath id="clip-n3"><rect x="230" y="340" width="280" height="120" rx="12"/></clipPath>
          <clipPath id="clip-n4"><rect x="20"  y="175" width="280" height="130" rx="12"/></clipPath>
        </defs>

        {/* ── N1 CAPTURA — arriba centro ── */}
        <rect x="230" y="20" width="280" height="110" rx="12"
          fill="var(--bg-elevated)"
          stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="230" y="20" width="4" height="110"
          fill="#c47859" clipPath="url(#clip-n1)"/>
        <text x="370" y="52"
          fontFamily="var(--font-sans)" fontSize="13" fontWeight="500"
          fill="var(--text)" textAnchor="middle">
          {t('nodes.n1.title')}
        </text>
        <text x="370" y="74"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n1.desc1')}
        </text>
        <text x="370" y="90"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n1.desc2')}
        </text>

        {/* ── N2 PRODUCCIÓN — derecha ── */}
        <rect x="440" y="175" width="280" height="130" rx="12"
          fill="var(--bg-elevated)"
          stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="440" y="175" width="4" height="130"
          fill="#c47859" clipPath="url(#clip-n2)"/>
        <text x="580" y="210"
          fontFamily="var(--font-sans)" fontSize="13" fontWeight="500"
          fill="var(--text)" textAnchor="middle">
          {t('nodes.n2.title')}
        </text>
        <text x="580" y="234"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n2.desc1')}
        </text>
        <text x="580" y="250"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n2.desc2')}
        </text>
        <text x="580" y="266"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n2.desc3')}
        </text>

        {/* ── N3 INTELIGENCIA — abajo centro ── */}
        <rect x="230" y="340" width="280" height="120" rx="12"
          fill="var(--bg-elevated)"
          stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="230" y="340" width="4" height="120"
          fill="#364965" clipPath="url(#clip-n3)"/>
        <text x="370" y="374"
          fontFamily="var(--font-sans)" fontSize="13" fontWeight="500"
          fill="var(--text)" textAnchor="middle">
          {t('nodes.n3.title')}
        </text>
        <text x="370" y="398"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n3.desc1')}
        </text>
        <text x="370" y="414"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n3.desc2')}
        </text>
        <text x="370" y="430"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n3.desc3')}
        </text>

        {/* ── N4 EVOLUCIÓN — izquierda ── */}
        <rect x="20" y="175" width="280" height="130" rx="12"
          fill="var(--bg-elevated)"
          stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="20" y="175" width="4" height="130"
          fill="#364965" clipPath="url(#clip-n4)"/>
        <text x="160" y="210"
          fontFamily="var(--font-sans)" fontSize="13" fontWeight="500"
          fill="var(--text)" textAnchor="middle">
          {t('nodes.n4.title')}
        </text>
        <text x="160" y="234"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n4.desc1')}
        </text>
        <text x="160" y="250"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n4.desc2')}
        </text>
        <text x="160" y="266"
          fontFamily="var(--font-sans)" fontSize="11" fontWeight="300"
          fill="var(--text-secondary)" textAnchor="middle">
          {t('nodes.n4.desc3')}
        </text>

        {/* ── EDGES — perímetro exacto, coordenadas definitivas ── */}

        {/* 1→2: N1 right (510,75) → N2 top (580,175) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 510 75 L 580 75 L 580 173"
          markerEnd="url(#arr-t)"/>

        {/* 2→3: N2 bottom (580,305) → N3 right (510,400) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 580 307 L 580 400 L 512 400"
          markerEnd="url(#arr-t)"/>

        {/* 3→4: N3 left (230,400) → N4 bottom (160,305) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge"
          d="M 228 400 L 160 400 L 160 307"
          markerEnd="url(#arr-s)"/>

        {/* 4→1: N4 top (160,175) → N1 left (230,75) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--d2"
          d="M 160 173 L 160 75 L 228 75"
          markerEnd="url(#arr-s)"/>

      </svg>
    </div>
  );
};

export default SolutionDiagram;
