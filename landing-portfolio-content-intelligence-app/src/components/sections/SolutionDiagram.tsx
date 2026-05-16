const SolutionDiagram = () => {
  return (
    <div className="sol-diagram">
      <svg
        width="100%"
        viewBox="0 0 680 520"
        role="img"
        aria-label="Loop creativo de Content Intelligence"
      >
        <title>Loop creativo de Content Intelligence</title>
        <desc>
          Cuatro nodos en ciclo: 1 Captura arriba, 2 Producción derecha,
          3 Inteligencia abajo, 4 Evolución izquierda.
        </desc>

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

          {/* ClipPaths — recortan la barra de acento al rx:12 de cada nodo */}
          <clipPath id="clip-n1"><rect x="210" y="10"  width="260" height="120" rx="12"/></clipPath>
          <clipPath id="clip-n2"><rect x="500" y="150" width="168" height="220" rx="12"/></clipPath>
          <clipPath id="clip-n3"><rect x="210" y="390" width="260" height="120" rx="12"/></clipPath>
          <clipPath id="clip-n4"><rect x="12"  y="150" width="168" height="220" rx="12"/></clipPath>
        </defs>

        {/* ── NODO 1 — CAPTURA (arriba centro) ── */}
        <rect x="210" y="10" width="260" height="120" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="210" y="10" width="4" height="120"
          fill="#c47859" clipPath="url(#clip-n1)"/>
        <text x="228" y="36"  fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">1 · CAPTURA</text>
        <text x="228" y="58"  fontFamily="var(--font-sans)" fontSize="14" fontWeight="500" fill="var(--text)">Captura tus ideas</text>
        <text x="228" y="78"  fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">En el momento en que aparecen.</text>
        <text x="228" y="94"  fontFamily="var(--font-sans)" fontSize="12" fontWeight="300" fill="var(--text-secondary)">Sin fricciones. Sin estructura forzada.</text>

        {/* ── NODO 2 — PRODUCCIÓN (derecha) ── */}
        <rect x="500" y="150" width="168" height="220" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(196,120,89,0.4)" strokeWidth="1"/>
        <rect x="500" y="150" width="4" height="220"
          fill="#c47859" clipPath="url(#clip-n2)"/>
        <text x="518" y="178" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">2 · PRODUCCIÓN</text>
        <text x="518" y="200" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">Convierte tu idea</text>
        <text x="518" y="217" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">en contenido</text>
        <text x="518" y="243" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">Elige una idea, define</text>
        <text x="518" y="258" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">para quién y dónde.</text>
        <text x="518" y="273" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">La plataforma genera</text>
        <text x="518" y="288" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">un brief adaptado a ti</text>
        <text x="518" y="303" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">para producir sin</text>
        <text x="518" y="318" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">empezar desde cero.</text>

        {/* ── NODO 3 — INTELIGENCIA (abajo centro) ── */}
        <rect x="210" y="390" width="260" height="120" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="210" y="390" width="4" height="120"
          fill="#364965" clipPath="url(#clip-n3)"/>
        <text x="228" y="416" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">3 · INTELIGENCIA</text>
        <text x="228" y="438" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">Insights y tu ADN creativo</text>
        <text x="228" y="458" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">Descubre oportunidades para evolucionar</text>
        <text x="228" y="473" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">con los temas, formatos y ritmos que</text>
        <text x="228" y="488" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">funcionan mejor para ti.</text>

        {/* ── NODO 4 — EVOLUCIÓN (izquierda) ── */}
        <rect x="12" y="150" width="168" height="220" rx="12"
          fill="var(--bg-elevated)" stroke="rgba(54,73,101,0.35)" strokeWidth="1"/>
        <rect x="12" y="150" width="4" height="220"
          fill="#364965" clipPath="url(#clip-n4)"/>
        <text x="30" y="178" fontFamily="var(--font-sans)" fontSize="10" fontWeight="500" letterSpacing="0.08em" fill="var(--text-faint)">4 · EVOLUCIÓN</text>
        <text x="30" y="200" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">La plataforma</text>
        <text x="30" y="218" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500" fill="var(--text)">crece contigo</text>
        <text x="30" y="244" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">Mientras más creas,</text>
        <text x="30" y="259" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">mejor te conoce.</text>
        <text x="30" y="274" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">Sacas más provecho</text>
        <text x="30" y="289" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">de tu contenido con</text>
        <text x="30" y="304" fontFamily="var(--font-sans)" fontSize="11" fontWeight="300" fill="var(--text-secondary)">menos esfuerzo.</text>

        {/* ── EDGES — perímetro rectangular exacto ── */}

        {/* 1→2: N1 right (470,70) → N2 top (584,150) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--t"
          d="M 470 70 L 584 70 L 584 148"
          markerEnd="url(#arr-t)"/>

        {/* 2→3: N2 bottom (584,370) → N3 right (470,450) */}
        <path fill="none" stroke="#c47859" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--t sol-edge--d2"
          d="M 584 370 L 584 450 L 472 450"
          markerEnd="url(#arr-t)"/>

        {/* 3→4: N3 left (210,450) → N4 bottom (96,370) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--s"
          d="M 208 450 L 96 450 L 96 372"
          markerEnd="url(#arr-s)"/>

        {/* 4→1: N4 top (96,150) → N1 left (210,70) */}
        <path fill="none" stroke="#364965" strokeWidth="1.5"
          strokeDasharray="6 4" className="sol-edge sol-edge--s sol-edge--d2"
          d="M 96 148 L 96 70 L 208 70"
          markerEnd="url(#arr-s)"/>

      </svg>
    </div>
  );
};

export default SolutionDiagram;
