import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', label: 'ES', flag: '🇲🇽' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update HTML lang attribute
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-white" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 rounded text-sm font-semibold transition-colors ${
              i18n.language === lang.code
                ? 'bg-white text-primary'
                : 'text-white hover:bg-white/20'
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
