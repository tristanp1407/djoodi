import React, { useState } from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../utils/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section id="testimonials" background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from local business owners who've transformed their customer loyalty.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <Quote size={48} className="absolute text-orange-200 opacity-30 -top-4 -left-4 transform -rotate-12" />
          
          <div className="text-center">
            <div className="mb-6">
              <p className="text-xl md:text-2xl italic text-gray-800">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>
            </div>
            
            <div className="mt-6">
              <p className="font-semibold text-lg">{TESTIMONIALS[activeIndex].author}</p>
              <p className="text-gray-600">{TESTIMONIALS[activeIndex].position}</p>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md text-gray-600 flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4">
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md text-gray-600 flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;