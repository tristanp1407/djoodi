import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";

const Contact: React.FC = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-800 placeholder-gray-400 transition-all";
  const labelClasses = "block font-medium text-gray-700 mb-2";

  if (isSubmitted) {
    return (
      <SectionWrapper
        id="contact"
        title={<>{t('contact.title')} <span className="text-secondary">{t('contact.titleHighlight')}</span></>}
        subtitle={t('contact.subtitle')}
        backgroundColor="#fefced"
      >
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-2xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('contact.successTitle')}
          </h3>
          <p className="text-gray-600 text-lg">
            {t('contact.successMessage')}
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      id="contact"
      title={<>{t('contact.title')} <span className="text-secondary">{t('contact.titleHighlight')}</span></>}
      subtitle={t('contact.subtitle')}
      backgroundColor="#fefced"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-2xl mx-auto"
      >
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              required
              rows={5}
              className={inputClasses + " resize-none"}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            {t('contact.submit')}
          </Button>
        </div>
      </form>
    </SectionWrapper>
  );
};

export default Contact;
