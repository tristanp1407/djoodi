import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import { PRICING_PLANS } from "../utils/constants";
import { Check, X } from "lucide-react";

const Pricing: React.FC = () => {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <SectionWrapper
      id="pricing"
      title={
        <>
          Affordable for Any <span className="text-secondary">Size</span>{" "}
          Business
        </>
      }
      subtitle={
        <>
          Choose the plan that works best for your{" "}
          <span className="text-secondary">business needs and budget.</span>
        </>
      }
      className="text-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              plan.highlight
                ? "bg-gradient-to-b from-accent/20 to-white border-2 border-accent shadow-lg"
                : "bg-white border border-gray-200 shadow-md"
            }`}
          >
            {plan.highlight && (
              <div className="bg-accent text-white py-2 px-4 text-center font-medium">
                Recommended
              </div>
            )}

            <div
              className={`p-6 md:p-8 ${
                !plan.highlight ? "pt-12 md:pt-19" : ""
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {feature.startsWith("No") ? (
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
                      {capitalizeFirstLetter(feature.replace("No ", ""))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p className="font-medium">
          Special Offer: Pay annually and get 2 months free!
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
