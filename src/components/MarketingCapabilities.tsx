import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./ui/Section";
import Background from "./ui/Background";
import { Mail, Bell, MapPin, BarChart3 } from "lucide-react";

const MarketingCapabilities: React.FC = () => {
  const { t } = useTranslation('marketing');
  const icons = [Mail, Bell, MapPin, BarChart3];
  const capabilities = t('capabilities', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
  }>;

  return (
    <Background backgroundColor="#e4646d">
      <Section id="marketing-capabilities" background="none">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            {t('sectionTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = icons[index];
            return (
              <div
                key={capability.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <Icon
                      className="w-16 h-16"
                      style={{ color: "#e4646d" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-700 text-center">
                    {capability.title}
                  </h3>
                  <p className="text-base text-gray-600 text-center">
                    {capability.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </Background>
  );
};

export default MarketingCapabilities;
