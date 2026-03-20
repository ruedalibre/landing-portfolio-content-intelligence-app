import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLanding from "./en/landing.json" with { type: "json" };
import esLanding from "./es/landing.json" with { type: "json" };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      landing: enLanding,
    },
    es: {
      landing: esLanding,
    },
  },
  lng: "en", // idioma por defecto
  fallbackLng: "en",
  ns: ["landing"],
  defaultNS: "landing",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
