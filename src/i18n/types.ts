import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enBenefits from './locales/en/benefits.json';
import enPricing from './locales/en/pricing.json';
import enExamples from './locales/en/examples.json';
import enMarketing from './locales/en/marketing.json';

// Generate types from English (default) translations
export interface Resources {
  common: typeof enCommon;
  hero: typeof enHero;
  benefits: typeof enBenefits;
  pricing: typeof enPricing;
  examples: typeof enExamples;
  marketing: typeof enMarketing;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: Resources;
  }
}
