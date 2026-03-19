import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import CoreInsight from "../components/sections/CoreInsight.tsx";
import CoreLoop from "../components/sections/CoreLoop";
import Capabilities from "../components/sections/Capabilities.tsx";
import ProductVisuals from "../components/sections/ProductVisuals";
import HowItWorks from "../components/sections/HowItWorks";
import WhyItMatters from "../components/sections/WhyItMatters";
import NorthStar from "../components/sections/NorthStar";
import Vision from "../components/sections/Vision";
import FinalCTA from "../components/sections/FinalCTA";

const Landing = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PROBLEM */}
      <Problem />

      {/* SOLUTION */}
      <Solution />

      {/* CORE INSIGHT (MIC DROP) */}
      <CoreInsight />

      {/* CORE LOOP */}
      <CoreLoop />

      {/* CAPABILITIES */}
      <Capabilities />

      {/* PRODUCT VISUALS (CRÍTICO) */}
      <ProductVisuals />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHY IT MATTERS */}
      <WhyItMatters />

      {/* NORTH STAR */}
      <NorthStar />

      {/* VISION */}
      <Vision />

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
};

export default Landing;