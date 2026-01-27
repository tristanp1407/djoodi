import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SectionWrapper from "./ui/SectionWrapper";

const UserStats: React.FC = () => {
  const { t } = useTranslation('benefits');
  const stats = t('userStatsSection.stats', { returnObjects: true }) as Array<{
    image: string;
    title: string;
    description: string;
  }>;

  return (
    <SectionWrapper
      id="user-stats"
      title={
        <>
          {t('userStatsSection.title')}{" "}
          <span className="text-secondary">{t('userStatsSection.titleHighlight')}</span>{" "}
          {t('userStatsSection.titleEnd')}
        </>
      }
      subtitle={
        <>
          {t('userStatsSection.subtitle')}{" "}
          <span className="text-secondary">{t('userStatsSection.subtitleHighlight')}</span>
        </>
      }
      className="text-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
          >
            <div className="h-[150px] w-full flex items-center justify-center mb-6 overflow-hidden">
              <LazyLoadImage
                src={stat.image}
                alt={stat.title}
                effect="blur"
                wrapperClassName="flex items-center justify-center w-full h-full"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-black mb-3 text-primary">
                {stat.title}
              </h3>
              <p className="text-gray-700">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default UserStats;
