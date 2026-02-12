import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation('hero');

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-accent/20 rounded-full blur-3xl opacity-60 transform rotate-12 bg-noise"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-3xl opacity-40 transform -rotate-12 bg-noise"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.4] text-white">
            <span className="text-secondary">{t('titleHighlight')}</span>
            <br />
            <span className="font-thin">{t('titleThin')}</span>{' '}
            {t('titleEnd')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-[450px] mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
