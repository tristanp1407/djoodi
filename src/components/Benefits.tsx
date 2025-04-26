import React from 'react';
import Section from './ui/Section';
import { BENEFITS } from '../utils/constants';
import { Wallet, ScanLine, Repeat, FolderHeart as UserHeart, Megaphone, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wallet':
        return <Wallet size={48} className="text-orange-500" />;
      case 'scan-line':
        return <ScanLine size={48} className="text-orange-500" />;
      case 'repeat':
        return <Repeat size={48} className="text-orange-500" />;
      case 'user-heart':
        return <UserHeart size={48} className="text-orange-500" />;
      case 'megaphone':
        return <Megaphone size={48} className="text-orange-500" />;
      case 'trending-up':
        return <TrendingUp size={48} className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <Section id="benefits" background="light" className="overflow-hidden">
      <div className="relative">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Benefits for Local Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our loyalty program is designed to help local businesses grow their customer base and increase revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;