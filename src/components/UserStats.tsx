import React from "react";
import SectionWrapper from "./ui/SectionWrapper";

const UserStats: React.FC = () => {
  const stats = [
    {
      icon: (
        <div className="h-[150px] w-full flex items-center justify-center mb-6">
          <img
            src="/images/people queuing for ice cream.png"
            alt="People queuing"
            className="max-h-full max-w-full object-contain mx-auto"
          />
        </div>
      ),
      title: <>Loyal Customers Stick Around</>,
      description:
        "83% of consumers say a loyalty program makes them more likely to keep buying from a brand. Build customer habits that last.",
    },
    {
      icon: (
        <div className="h-[150px] w-full flex items-center justify-center mb-6">
          <img
            src="/images/coffee cup graph.png"
            alt="Coffee cup graph"
            className="max-h-full max-w-full object-contain mx-auto"
          />
        </div>
      ),
      title: <>Small Gains, Big Impact</>,
      description:
        "Just a 5% increase in retention can boost your profits by up to 95%. Loyalty pays off—literally.",
    },
    {
      icon: (
        <div className="h-[150px] w-full flex items-center justify-center mb-6">
          <img
            src="/images/woman laid back in spa.png"
            alt="Woman in spa"
            className="max-h-full max-w-full object-contain mx-auto"
          />
        </div>
      ),
      title: <>More Visits, More Sales</>,
      description:
        "Businesses using loyalty tools with Square see a 40% increase in repeat visits. Give people a reason to come back.",
    },
  ];

  return (
    <SectionWrapper
      id="user-stats"
      title={
        <>
          Customers <span className="text-secondary">love</span> a loyalty
          scheme
        </>
      }
      subtitle={
        <>
          Big brands have loyalty programs—now{" "}
          <span className="text-secondary">small businesses can too.</span>
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
            <div className="flex-none ml-0 mr-auto">{stat.icon}</div>
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
