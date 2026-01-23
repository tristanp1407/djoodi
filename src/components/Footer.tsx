import React from "react";
import { useTranslation } from "react-i18next";
import Container from "./ui/Container";

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-6">
            <span className="font-black text-4xl text-primary">yoodi</span>
          </div>
          <p className="text-gray-400 max-w-md mb-8">
            {t('footer.description')}
          </p>
          <div className="mt-2 pt-4 border-t border-gray-800 text-gray-400 text-sm">
            <p>
              {t('footer.copyright', { year })}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
