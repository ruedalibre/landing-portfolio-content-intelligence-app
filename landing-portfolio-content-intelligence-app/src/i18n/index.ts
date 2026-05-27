import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHero from "./en/hero.json" with { type: "json" };
import enNavbar from "./en/navbar.json" with { type: "json" };
import enProblem from "./en/problem.json" with { type: "json" };
import enSolution from "./en/solution.json" with { type: "json" };
import enCoreInsight from "./en/core_insight.json" with { type: "json" };
import enProductVisuals from "./en/product_visuals.json" with { type: "json" };
import enFinalCTA from "./en/final_cta.json" with { type: "json" };
import enEarlyAccessModal from "./en/request_access_modal.json" with { type: "json" };
import enManifesto from "./en/manifesto.json" with { type: "json" };
import enTerms from "./en/terms.json" with { type: "json" };
import enPrivacy from "./en/privacy.json" with { type: "json" };

import esHero from "./es/hero.json" with { type: "json" };
import esNavbar from "./es/navbar.json" with { type: "json" };
import esProblem from "./es/problem.json" with { type: "json" };
import esSolution from "./es/solution.json" with { type: "json" };
import esCoreInsight from "./es/core_insight.json" with { type: "json" };
import esProductVisuals from "./es/product_visuals.json" with { type: "json" };
import esFinalCTA from "./es/final_cta.json" with { type: "json" };
import esEarlyAccessModal from "./es/request_access_modal.json" with { type: "json" };
import esManifesto from "./es/manifesto.json" with { type: "json" };
import esTerms from "./es/terms.json" with { type: "json" };
import esPrivacy from "./es/privacy.json" with { type: "json" };
import enPricing from "./en/pricing.json" with { type: "json" };
import esPricing from "./es/pricing.json" with { type: "json" };

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
      core_insight: enCoreInsight,
      product_visuals: enProductVisuals,
      final_cta: enFinalCTA,
      early_access_modal: enEarlyAccessModal,
      manifesto: enManifesto,
      terms: enTerms,
      privacy: enPrivacy,
      pricing: enPricing,
    },
    es: {
      hero: esHero,
      navbar: esNavbar,
      problem: esProblem,
      solution: esSolution,
      core_insight: esCoreInsight,
      product_visuals: esProductVisuals,
      final_cta: esFinalCTA,
      early_access_modal: esEarlyAccessModal,
      manifesto: esManifesto,
      terms: esTerms,
      privacy: esPrivacy,
      pricing: esPricing,
    },
  },

  lng: initialLang,
  fallbackLng: "en",

  ns: [
    "hero",
    "navbar",
    "problem",
    "solution",
    "core_insight",
    "product_visuals",
    "final_cta",
    "early_access_modal",
    "manifesto",
    "terms",
    "privacy",
    "pricing",
  ],

  defaultNS: "hero",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
