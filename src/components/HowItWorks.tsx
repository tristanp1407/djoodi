import React from "react";
import Section from "./ui/Section";
import Background from "./ui/Background";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Your stamp card",
      subtitle: "In their Apple or Google Wallet",
      image: "/images/hand holding phone.png",
    },
    {
      number: "2",
      title: "They buy, you scan",
      subtitle: "In one tap, using our free app.",
      image: "/images/staff scanning card .png",
    },
    {
      number: "3",
      title: "They collect stamps",
      subtitle: "One stamp per visit.",
      image: "/images/reward screen.png",
    },
    {
      number: "4",
      title: "You reward them",
      subtitle: "Everyone loves a discount!",
      image: "/images/man reciveing free coffee.png",
    },
  ];

  return (
    <Background>
      <Section id="how-it-works" background="none">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Designed to be simple to use for both your business and your
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="text-5xl font-black text-[#e4646d]/20 mb-2">
                  {step.number}
                </div>
                <div className="flex items-center justify-center mb-2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-auto h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 mt-5 text-gray-700">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Background>
  );
};

export default HowItWorks;
