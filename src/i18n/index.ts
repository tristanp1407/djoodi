import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English (default) translations synchronously - bundled
import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enBenefits from './locales/en/benefits.json';
import enPricing from './locales/en/pricing.json';
import enExamples from './locales/en/examples.json';
import enMarketing from './locales/en/marketing.json';

// Spanish translations will be lazy-loaded
const esTranslations = {
  common: () => import('./locales/es/common.json'),
  hero: () => import('./locales/es/hero.json'),
  benefits: () => import('./locales/es/benefits.json'),
  pricing: () => import('./locales/es/pricing.json'),
  examples: () => import('./locales/es/examples.json'),
  marketing: () => import('./locales/es/marketing.json'),
};

const resources = {
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
    fallbackLng: 'en', // English is default
    defaultNS: 'common',
    supportedLngs: ['es', 'en'],

    // Language detection order
    detection: {
      order: ['localStorage', 'navigator'], // localStorage first, then browser
      caches: ['localStorage'], // Store preference in localStorage
      lookupLocalStorage: 'djoodi_language',
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

// Lazy load Spanish translations when needed
i18n.on('languageChanged', async (lng) => {
  if (lng === 'es') {
    // Load all Spanish namespaces
    const namespaces = Object.keys(esTranslations) as Array<keyof typeof esTranslations>;
    for (const ns of namespaces) {
      if (!i18n.hasResourceBundle(lng, ns)) {
        const translations = await esTranslations[ns]();
        i18n.addResourceBundle(lng, ns, translations.default || translations);
      }
    }
  }
});

export default i18n;
