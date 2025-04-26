import React, { useState } from 'react';
import Section from './ui/Section';
import { BUSINESS_EXAMPLES } from '../utils/constants';
import { Coffee, IceCream, Heart } from 'lucide-react';

const ProfitVisualization: React.FC = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_EXAMPLES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'coffee':
        return <Coffee size={24} className="text-orange-600" />;
      case 'ice-cream':
        return <IceCream size={24} className="text-orange-600" />;
      case 'heart':
        return <Heart size={24} className="text-orange-600" />;
      default:
        return null;
    }
  };

  const activeExample = BUSINESS_EXAMPLES.find(example => example.id === activeTab) || BUSINESS_EXAMPLES[0];

  // Calculate bar heights based on visit increase data
  const beforeHeight = `${(activeExample.visitIncrease.before / 3) * 100}%`;
  const afterHeight = `${(activeExample.visitIncrease.after / 3) * 100}%`;

  return (
    <Section id="profit" background="light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How Loyalty Pays Off
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how our loyalty program creates real revenue growth for businesses like yours.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b">
            {BUSINESS_EXAMPLES.map((example) => (
              <button
                key={example.id}
                className={`flex items-center px-6 py-4 text-left transition-colors duration-200 ${
                  activeTab === example.id
                    ? 'bg-orange-50 border-b-2 border-orange-500 text-orange-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(example.id)}
              >
                <span className="mr-2">{getIcon(example.icon)}</span>
                <span className="font-medium">{example.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {activeExample.program}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average price:</span>
                    <span className="font-semibold">{activeExample.averagePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loyalty customers monthly:</span>
                    <span className="font-semibold">{activeExample.customersMonthly}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-800 font-medium">Extra monthly revenue:</span>
                    <span className="font-bold text-orange-600">{activeExample.extraRevenue}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4 text-center">
                  Monthly Visits per Customer
                </h4>
                
                <div className="flex items-end justify-center h-48 gap-12">
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 bg-gray-100 rounded-t-md">
                      <div 
                        className="absolute bottom-0 w-full bg-gray-300 rounded-t-md transition-all duration-500" 
                        style={{ height: beforeHeight }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
                        {activeExample.visitIncrease.before}
                      </div>
                    </div>
                    <span className="mt-2 text-gray-600">Before</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 bg-gray-100 rounded-t-md">
                      <div 
                        className="absolute bottom-0 w-full bg-orange-400 rounded-t-md transition-all duration-500" 
                        style={{ height: afterHeight }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                        {activeExample.visitIncrease.after}
                      </div>
                    </div>
                    <span className="mt-2 text-gray-600">With Loyalty</span>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-teal-600 font-medium">
                  {Math.round((activeExample.visitIncrease.after / activeExample.visitIncrease.before - 1) * 100)}% increase in visits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfitVisualization;