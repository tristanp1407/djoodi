import React from 'react';
import Button from './ui/Button';
import { HERO_CTA, HERO_SUBTITLE, HERO_TITLE } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-accent/20 rounded-full blur-3xl opacity-60 transform rotate-12 bg-noise"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-3xl opacity-40 transform -rotate-12 bg-noise"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {HERO_TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-secondary/90 mb-8 md:mb-10">
            {HERO_SUBTITLE}
          </p>
          <div className="animate-bounce-slow">
            <Button variant="secondary" size="lg" className="shadow-lg">
              {HERO_CTA}
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white">No app downloads</span>
            </div>
            <div className="flex items-center">
              <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white">Setup in minutes</span>
            </div>
            <div className="flex items-center">
              <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white">Free 30-day trial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;