import esCommon from './locales/es/common.json';
import esHero from './locales/es/hero.json';
import esBenefits from './locales/es/benefits.json';
import esPricing from './locales/es/pricing.json';
import esExamples from './locales/es/examples.json';
import esMarketing from './locales/es/marketing.json';

// Generate types from Spanish (default) translations
export interface Resources {
  common: typeof esCommon;
  hero: typeof esHero;
  benefits: typeof esBenefits;
  pricing: typeof esPricing;
  examples: typeof esExamples;
  marketing: typeof esMarketing;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: Resources;
  }
}
