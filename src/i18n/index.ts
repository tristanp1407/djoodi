import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translations synchronously
import esCommon from './locales/es/common.json';
import esHero from './locales/es/hero.json';
import esBenefits from './locales/es/benefits.json';
import esPricing from './locales/es/pricing.json';
import esExamples from './locales/es/examples.json';
import esMarketing from './locales/es/marketing.json';

import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enBenefits from './locales/en/benefits.json';
import enPricing from './locales/en/pricing.json';
import enExamples from './locales/en/examples.json';
import enMarketing from './locales/en/marketing.json';

const resources = {
  es: {
    common: esCommon,
    hero: esHero,
    benefits: esBenefits,
    pricing: esPricing,
    examples: esExamples,
    marketing: esMarketing,
  },
  en: {
    common: enCommon,
    hero: enHero,
    benefits: enBenefits,
    pricing: enPricing,
    examples: enExamples,
    marketing: enMarketing,
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next)  // Passes i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Spanish is default
    defaultNS: 'common',
    supportedLngs: ['es', 'en'],

    // Language detection order
    detection: {
      order: ['localStorage', 'navigator'], // localStorage first, then browser
      caches: ['localStorage'], // Store preference in localStorage
      lookupLocalStorage: 'yoodi_language',
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    // Enable for development
    debug: import.meta.env.DEV,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
