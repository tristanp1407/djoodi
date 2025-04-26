import React from 'react';
import Section from './ui/Section';
import { HOW_IT_WORKS_STEPS } from '../utils/constants';

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our digital loyalty system is designed to be simple to use for both businesses and customers.
        </p>
      </div>

      <div className="space-y-20 md:space-y-24">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <div 
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 md:gap-12 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-teal-200 rounded-xl opacity-50 blur-md"></div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={step.imageUrl} 
                    alt={step.title} 
                    className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl mb-4">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;