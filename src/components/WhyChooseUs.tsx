import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { FINAL_CTA, WHY_CHOOSE_US } from '../utils/constants';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <Section background="light">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Why Small Businesses Choose Us
              </h2>
              
              <ul className="space-y-4 mb-8">
                {WHY_CHOOSE_US.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="mt-1 mr-3 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="mt-4"
              >
                {FINAL_CTA}
              </Button>
            </div>
            
            <div className="hidden md:block relative h-full">
              <img 
                src="https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy business owner" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;