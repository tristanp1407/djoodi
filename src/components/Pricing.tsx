import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import { Check, X } from "lucide-react";
import EnterpriseModal from "./EnterpriseModal";

const Pricing: React.FC = () => {
  const { t } = useTranslation('pricing');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionWrapper
      id="pricing"
      title={
        <>
          {t('sectionTitle')} <span className="text-secondary">{t('sectionTitleHighlight')}</span>{" "}
          {t('sectionTitleEnd')}
        </>
      }
      subtitle={
        <>
          {t('sectionSubtitle')}{" "}
          <span className="text-secondary">{t('sectionSubtitleHighlight')}</span>
        </>
      }
      className="text-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-200 shadow-md">
          <div className="p-6 md:p-8 pt-12 md:pt-19">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                {t('plans.starter.name')}
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('plans.starter.price')}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{t('plans.starter.description')}</p>
            </div>

            <ul className="space-y-3">
              {(t('plans.starter.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              {(t('plans.starter.excluded', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={`ex-${i}`} className="flex items-start">
                  <X size={20} className="text-red-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-b from-accent/20 to-white border-2 border-accent shadow-lg">
          <div className="bg-accent text-white py-2 px-4 text-center font-medium">
            {t('recommended')}
          </div>

          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                {t('plans.enterprise.name')}
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl md:text-3xl font-bold text-secondary">
                  {t('contactSales')}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{t('plans.enterprise.description')}</p>
            </div>

            <p className="text-sm font-semibold text-primary mb-3">
              {t('plans.enterprise.everythingInBase')}
            </p>

            <ul className="space-y-3 mb-6">
              {(t('plans.enterprise.extras', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check size={20} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsModalOpen(true)}
            >
              {t('plans.enterprise.cta')}
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p className="font-medium">
          {t('specialOffer')}
        </p>
      </div>

      <EnterpriseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </SectionWrapper>
  );
};

export default Pricing;
