import Navbar from "../components/layout/Navbar.tsx";
import Hero from "../components/sections/Hero.tsx";
import Problem from "../components/sections/Problem.tsx";
import Solution from "../components/sections/Solution.tsx";
import CoreInsight from "../components/sections/CoreInsight.tsx";
import ProductVisuals from "../components/sections/ProductVisuals.tsx";
import Manifesto from "../components/sections/Manifesto.tsx";
import Pricing from "../components/sections/Pricing.tsx";
import FinalCTA from "../components/sections/FinalCTA.tsx";
import RequestAccessModal from "../components/ui/RequestAccessModal.tsx";
import { useState, useEffect } from "react";

const Landing = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
      <Navbar onRequestAccess={() => setModalOpen(true)} />
      <main>
        <Hero onRequestAccess={() => setModalOpen(true)} />

        <Problem />

        <Solution />

        <CoreInsight />

        <ProductVisuals />

        <Manifesto />

        <Pricing onRequestAccess={() => setModalOpen(true)} />

        <FinalCTA onRequestAccess={() => setModalOpen(true)} />
      </main>

      <RequestAccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Landing;
