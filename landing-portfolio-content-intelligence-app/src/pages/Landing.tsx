import Navbar from "../components/layout/Navbar.tsx";
import Hero from "../components/sections/Hero.tsx";
import Problem from "../components/sections/Problem.tsx";
import Solution from "../components/sections/Solution.tsx";
import CoreInsight from "../components/sections/CoreInsight.tsx";
import CoreLoop from "../components/sections/CoreLoop.tsx";
import Capabilities from "../components/sections/Capabilities.tsx";
import ProductVisuals from "../components/sections/ProductVisuals.tsx";
import HowItWorks from "../components/sections/HowItWorks.tsx";
import WhyItMatters from "../components/sections/WhyItMatters.tsx";
import NorthStar from "../components/sections/NorthStar.tsx";
import Vision from "../components/sections/Vision.tsx";
import FinalCTA from "../components/sections/FinalCTA.tsx";

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