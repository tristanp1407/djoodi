import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { PRICING_PLANS } from '../utils/constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Affordable for Any Size Business
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that works best for your business needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              plan.highlight 
                ? 'bg-gradient-to-b from-orange-50 to-white border-2 border-orange-400 shadow-lg' 
                : 'bg-white border border-gray-200 shadow-md'
            }`}
          >
            {plan.highlight && (
              <div className="bg-orange-500 text-white py-2 px-4 text-center font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  {plan.name === "Pay-As-You-Grow" ? (
                    <span className="text-gray-500 ml-1">per user/month</span>
                  ) : (
                    <span className="text-gray-500 ml-1">/month</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? "primary" : "outline"} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-600">
        <p className="font-medium">
          Special Offer: Pay annually and get 2 months free!
        </p>
      </div>
    </Section>
  );
};

export default Pricing;