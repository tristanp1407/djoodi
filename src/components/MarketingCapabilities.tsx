import React from "react";
import Section from "./ui/Section";
import Background from "./ui/Background";
import { Mail, Bell, MapPin, BarChart3 } from "lucide-react";

const MarketingCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Mail,
      title: "Build Your Customer List",
      subtitle:
        "Customers enter their email to get their loyalty card. (They can easily opt out of marketing emails.)",
    },
    {
      icon: Bell,
      title: "Announce New Products",
      subtitle:
        "Email your customers instantly when new items arrive, getting them excited and ready to shop!",
    },
    {
      icon: MapPin,
      title: "Send Reminders & Offers",
      subtitle:
        'Trigger push notifications when customers are nearby: "You\'re 2 stamps away from your free coffee!"',
    },
    {
      icon: BarChart3,
      title: "Understand Your Customers",
      subtitle:
        "Your analytics dashboard shows busiest days, peak hours, retention rates, and more—helping you boost sales.",
    },
  ];

  return (
    <Background backgroundColor="#e4646d">
      <Section id="marketing-capabilities" background="none">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Keep your customers engaged
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connect with your customers like never before
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <capability.icon
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
          ))}
        </div>
      </Section>
    </Background>
  );
};

export default MarketingCapabilities;
