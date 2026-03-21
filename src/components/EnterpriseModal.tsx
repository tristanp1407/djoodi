import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, CheckCircle } from "lucide-react";
import Button from "./ui/Button";

type EnterpriseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EnterpriseModal: React.FC<EnterpriseModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation("enterpriseModal");
  const [formData, setFormData] = useState({
    companyName: "",
    branches: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mdagylnw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Yoodi Enterprise Inquiry: ${formData.companyName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(t("errorMessage"));
      }
    } catch {
      setError(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after close animation
    setTimeout(() => {
      setFormData({ companyName: "", branches: "", contact: "" });
      setIsSubmitted(false);
      setError(null);
    }, 200);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-800 placeholder-gray-400 transition-all";
  const labelClasses = "block font-medium text-gray-700 mb-2";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative animate-fade-in-down">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircle size={56} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("successTitle")}
              </h3>
              <p className="text-gray-600">{t("successMessage")}</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-primary mb-1">
                {t("title")}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{t("subtitle")}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="companyName" className={labelClasses}>
                    {t("companyName")}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={t("companyNamePlaceholder")}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="branches" className={labelClasses}>
                    {t("branches")}
                  </label>
                  <input
                    type="number"
                    id="branches"
                    name="branches"
                    value={formData.branches}
                    onChange={handleChange}
                    placeholder={t("branchesPlaceholder")}
                    required
                    min="1"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact" className={labelClasses}>
                    {t("contact")}
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder={t("contactPlaceholder")}
                    required
                    className={inputClasses}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("submitting") : t("submit")}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseModal;
