import React from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "./ui/SectionWrapper";
import { Check, X } from "lucide-react";

const Pricing: React.FC = () => {
  const { t } = useTranslation('pricing');
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const plans = ['starter', 'growth'];

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
        {plans.map((planKey) => {
          const isGrowth = planKey === 'growth';
          return (
            <div
              key={planKey}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isGrowth
                  ? "bg-gradient-to-b from-accent/20 to-white border-2 border-accent shadow-lg"
                  : "bg-white border border-gray-200 shadow-md"
              }`}
            >
              {isGrowth && (
                <div className="bg-accent text-white py-2 px-4 text-center font-medium">
                  {t('recommended')}
                </div>
              )}

              <div
                className={`p-6 md:p-8 ${
                  !isGrowth ? "pt-12 md:pt-19" : ""
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t(`plans.${planKey}.name`)}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">
                      {t(`plans.${planKey}.price`)}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{t(`plans.${planKey}.description`)}</p>
                </div>

                <ul className="space-y-3">
                  {(t(`plans.${planKey}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.startsWith("No") || feature.startsWith("Sin") ? (
                        <X
                          size={20}
                          className="text-red-500 mt-0.5 mr-2 shrink-0"
                        />
                      ) : (
                        <Check
                          size={20}
                          className="text-green-500 mt-0.5 mr-2 shrink-0"
                        />
                      )}
                      <span className="text-gray-700">
                        {capitalizeFirstLetter(feature.replace(/^(No|Sin)\s+/, ""))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p className="font-medium">
          {t('specialOffer')}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
