import React from 'react';
import Section from './ui/Section';
import { SETUP_STEPS } from '../utils/constants';

const Setup: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Set Up in Minutes, Not Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with our loyalty program is quick and easy.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-orange-200 z-0"></div>
          
          <div className="space-y-12 relative z-10">
            {SETUP_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-orange-100 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-xl md:text-2xl font-bold text-orange-500">
                    {index + 1}
                  </span>
                </div>
                
                <div className="flex-1 bg-white rounded-lg p-6 shadow-md transition-all hover:shadow-lg duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {step}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 && "Choose rewards like 'Buy 10, Get 1 Free'—we'll guide you through best practices."}
                    {index === 1 && "Place the provided code at your counter—customers join instantly."}
                    {index === 2 && "Quick, intuitive app training—your team will be ready immediately."}
                    {index === 3 && "Watch customers return more frequently as your loyalty program runs itself."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Setup;