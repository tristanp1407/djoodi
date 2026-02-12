import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import Spanish (default) translations synchronously - bundled
import esCommon from './locales/es/common.json';
import esHero from './locales/es/hero.json';
import esBenefits from './locales/es/benefits.json';
import esPricing from './locales/es/pricing.json';
import esExamples from './locales/es/examples.json';
import esMarketing from './locales/es/marketing.json';

// English translations will be lazy-loaded
const enTranslations = {
  common: () => import('./locales/en/common.json'),
  hero: () => import('./locales/en/hero.json'),
  benefits: () => import('./locales/en/benefits.json'),
  pricing: () => import('./locales/en/pricing.json'),
  examples: () => import('./locales/en/examples.json'),
  marketing: () => import('./locales/en/marketing.json'),
};

const resources = {
  es: {
    common: esCommon,
    hero: esHero,
    benefits: esBenefits,
    pricing: esPricing,
    examples: esExamples,
    marketing: esMarketing,
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
      useSuspense: false, // We'll handle loading manually
    },
  });

// Lazy load English translations when needed
i18n.on('languageChanged', async (lng) => {
  if (lng === 'en') {
    // Load all English namespaces
    const namespaces = Object.keys(enTranslations) as Array<keyof typeof enTranslations>;
    for (const ns of namespaces) {
      if (!i18n.hasResourceBundle(lng, ns)) {
        const translations = await enTranslations[ns]();
        i18n.addResourceBundle(lng, ns, translations.default || translations);
      }
    }
  }
});

export default i18n;
