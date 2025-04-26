export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export type BusinessExample = {
  id: string;
  name: string;
  icon: string;
  program: string;
  averagePrice: string;
  customersMonthly: number;
  extraRevenue: string;
  visitIncrease: {
    before: number;
    after: number;
  };
};

export type Testimonial = {
  quote: string;
  author: string;
  position: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: string;
};

export type StepItem = {
  title: string;
  description: string;
  imageUrl: string;
};