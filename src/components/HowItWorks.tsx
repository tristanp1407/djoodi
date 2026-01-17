import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./ui/Section";
import Background from "./ui/Background";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation('benefits');
  const steps = t('howItWorksSection.steps', { returnObjects: true }) as Array<{
    number: string;
    title: string;
    subtitle: string;
    image: string;
  }>;

  return (
    <Background>
      <Section id="how-it-works" background="none">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            {t('howItWorksSection.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('howItWorksSection.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="text-5xl font-black text-[#e4646d]/20 mb-2">
                  {step.number}
                </div>
                <div className="flex items-center justify-center mb-2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-auto h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 mt-5 text-gray-700">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

export default HowItWorks;
