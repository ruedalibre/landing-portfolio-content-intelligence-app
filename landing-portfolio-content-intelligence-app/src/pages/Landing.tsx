import Navbar from "../components/layout/Navbar.tsx";
import Hero from "../components/sections/Hero.tsx";
import Problem from "../components/sections/Problem.tsx";
import Solution from "../components/sections/Solution.tsx";
import CoreInsight from "../components/sections/CoreInsight.tsx";
import Capabilities from "../components/sections/Capabilities.tsx";
import ProductVisuals from "../components/sections/ProductVisuals.tsx";
import WhyItMatters from "../components/sections/WhyItMatters.tsx";
import NorthStar from "../components/sections/NorthStar.tsx";
import Vision from "../components/sections/Vision.tsx";
import FinalCTA from "../components/sections/FinalCTA.tsx";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  
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

      {/* CAPABILITIES */}
      <Capabilities />

      {/* PRODUCT VISUALS (CRÍTICO) */}
      <ProductVisuals />

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
