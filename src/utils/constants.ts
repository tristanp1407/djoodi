import {
  BenefitItem,
  BusinessExample,
  PricingPlan,
  StepItem,
  Testimonial,
} from "./types";

export const HERO_TITLE = "Great loyalty, tiny businesses";
export const HERO_SUBTITLE =
  "Give your customers a reason to smile, and a reason to return.";
export const HERO_CTA = "Start Your Free Trial Now";

export const BENEFITS: BenefitItem[] = [
  {
    title: "Powerful Digital Loyalty Schemes",
    description:
      "Easy as paper, but smarter. Customers keep a digital card in their Apple or Google Wallet—no apps to download.",
    icon: "wallet",
  },
  {
    title: "Instant Rewards",
    description:
      "One quick scan by staff at checkout—customers earn digital stamps effortlessly.",
    icon: "scan-line",
  },
  {
    title: "Increased Customer Frequency",
    description:
      "Proven to boost return visits by up to 20% with targeted rewards.",
    icon: "repeat",
  },
  {
    title: "Know Your Regulars",
    description:
      "See exactly how often customers visit and what they love most.",
    icon: "user-heart",
  },
  {
    title: "Hands-Free Marketing",
    description:
      "Automatically send messages or special offers to bring customers back.",
    icon: "megaphone",
  },
  {
    title: "Real Results",
    description:
      "Businesses typically see loyalty members spending 20% more per visit.",
    icon: "trending-up",
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    title: "Sign Up in Seconds",
    description:
      "Customers scan your branded QR code at checkout and instantly add a digital loyalty card to their phone's wallet.",
    imageUrl:
      "https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Easy Digital Stamping",
    description:
      "Staff scan customer's QR card with our simple app—just a single tap. Visits are recorded instantly.",
    imageUrl:
      "https://images.pexels.com/photos/6804080/pexels-photo-6804080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Reward Your Regulars",
    description:
      "Customers automatically receive notifications when rewards are ready, boosting repeat visits and loyalty effortlessly.",
    imageUrl:
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const BUSINESS_EXAMPLES: BusinessExample[] = [
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    icon: "coffee",
    program: "Free coffee after 10 visits",
    averagePrice: "MX$40",
    customersMonthly: 100,
    extraRevenue: "MX$4,000+",
    visitIncrease: {
      before: 1.5,
      after: 1.8,
    },
  },
  {
    id: "ice-cream",
    name: "Ice Cream Parlour",
    icon: "ice-cream",
    program: "Extra scoop after 5 visits",
    averagePrice: "MX$50",
    customersMonthly: 80,
    extraRevenue: "MX$3,200+",
    visitIncrease: {
      before: 2.0,
      after: 2.4,
    },
  },
  {
    id: "nail-salon",
    name: "Nail Salon",
    icon: "heart",
    program: "50% off after 8 visits",
    averagePrice: "MX$250",
    customersMonthly: 40,
    extraRevenue: "MX$5,000+",
    visitIncrease: {
      before: 1.0,
      after: 2.0,
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "MX$450/month",
    description: "Perfect for single-location businesses",
    features: [
      "Branded loyalty card in customer phone wallets",
      "Free staff app to scan QR codes",
      "Easy setup assistance",
      "Unlimited customer stamps",
      "Single store location",
      "Unlimited support",
      "No customer email collection",
      "No email marketing",
      "No push notifications",
      "No customer analytics dashboard",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth Plan",
    price: "MX$900/month",
    description: "Ideal for multi-location businesses",
    features: [
      "Branded loyalty card in customer phone wallets",
      "Free staff app to scan QR codes",
      "Easy setup assistance",
      "Unlimited customer stamps",
      "Up to 10 store locations",
      "Unlimited support",
      "Customer email collection",
      "Email marketing",
      "Push notifications",
      "Customer analytics dashboard (popular times, busiest days, retention rates)",
    ],
    cta: "Upgrade Now",
    highlight: true,
  },
];

export const SETUP_STEPS = [
  "Create Your Loyalty Offer",
  "Print Your Branded QR Code",
  "Train Your Staff (in 10 minutes)",
  "Start Rewarding & Growing",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We saw immediate results—customers visit more and spend more each visit. The setup was incredibly easy!",
    author: "Ana",
    position: "Café Owner in Roma Norte",
  },
  {
    quote:
      "Our clients love how simple it is. We've boosted repeat appointments dramatically!",
    author: "Luis",
    position: "Salon Owner in Condesa",
  },
  {
    quote:
      "This loyalty program paid for itself in the first month. Our customers are happier and returning more often.",
    author: "Maria",
    position: "Bakery Owner in Polanco",
  },
];

export const WHY_CHOOSE_US = [
  "No additional apps required: Customer-friendly digital wallet cards.",
  "Real, measurable growth: Increased visit frequency, higher spend.",
  "Personalized local support: We're right here in CDMX to help.",
  "Affordable pricing: High-value, low-cost—tailored to your business size.",
  "Quick and simple: Setup takes minutes, results start immediately.",
];

export const FINAL_CTA = "Try Your Free Month Now";
