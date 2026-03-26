import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHero from "./en/hero.json" with { type: "json" };
import enNavbar from "./en/navbar.json" with { type: "json" };
import enProblem from "./en/problem.json" with { type: "json" };
import enSolution from "./en/solution.json" with { type: "json" };
import enCapabilities from "./en/capabilities.json" with { type: "json" };
import enCoreInsight from "./en/core_insight.json" with { type: "json" };
import enCoreLoop from "./en/core_loop.json" with { type: "json" };
import enNorthStar from "./en/north_star.json" with { type: "json" };
import enProductVisuals from "./en/product_visuals.json" with { type: "json" };
import enVision from "./en/vision.json" with { type: "json" };
import enWhyItMatters from "./en/why_it_matters.json" with { type: "json" };
import enFinalCTA from "./en/final_cta.json" with { type: "json" };
import enEarlyAccessModal from "./en/early_access_modal.json" with { type: "json" };

import esHero from "./es/hero.json" with { type: "json" };
import esNavbar from "./es/navbar.json" with { type: "json" };
import esProblem from "./es/problem.json" with { type: "json" };
import esSolution from "./es/solution.json" with { type: "json" };
import esCapabilities from "./es/capabilities.json" with { type: "json" };
import esCoreInsight from "./es/core_insight.json" with { type: "json" };
import esCoreLoop from "./es/core_loop.json" with { type: "json" };
import esNorthStar from "./es/north_star.json" with { type: "json" };
import esProductVisuals from "./es/product_visuals.json" with { type: "json" };
import esVision from "./es/vision.json" with { type: "json" };
import esWhyItMatters from "./es/why_it_matters.json" with { type: "json" };
import esFinalCTA from "./es/final_cta.json" with { type: "json" };
import esEarlyAccessModal from "./es/early_access_modal.json" with { type: "json" };

/* Detect language */

const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language?.slice(0, 2);

const supportedLangs = ["en", "es"];

const initialLang =
  (savedLang && supportedLangs.includes(savedLang) && savedLang) ||
  (browserLang && supportedLangs.includes(browserLang) && browserLang) ||
  "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      hero: enHero,
      navbar: enNavbar,
      problem: enProblem,
      solution: enSolution,
      capabilities: enCapabilities,
      core_insight: enCoreInsight,
      core_loop: enCoreLoop,
      north_star: enNorthStar,
      product_visuals: enProductVisuals,
      vision: enVision,
      why_it_matters: enWhyItMatters,
      final_cta: enFinalCTA,
      early_access_modal: enEarlyAccessModal,
    },
    es: {
      hero: esHero,
      navbar: esNavbar,
      problem: esProblem,
      solution: esSolution,
      capabilities: esCapabilities,
      core_insight: esCoreInsight,
      core_loop: esCoreLoop,
      north_star: esNorthStar,
      product_visuals: esProductVisuals,
      vision: esVision,
      why_it_matters: esWhyItMatters,
      final_cta: esFinalCTA,
      early_access_modal: esEarlyAccessModal,
    },
  },

  lng: initialLang,
  fallbackLng: "en",

  ns: [
    "hero",
    "navbar",
    "problem",
    "solution",
    "capabilities",
    "core_insight",
    "core_loop",
    "north_star",
    "product_visuals",
    "vision",
    "why_it_matters",
    "final_cta",
    "early_access_modal",
  ],

  defaultNS: "hero",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
