import React from "react";
import SectionWrapper from "./ui/SectionWrapper";

const Price: React.FC<{ value: string }> = ({ value }) => (
  <span className="font-bold text-green-600 whitespace-pre"> {value} </span>
);

const BusinessExamples: React.FC = () => {
  const examples = [
    {
      title: "Café (10th coffee free)",
      details: [
        "100 customers, visiting 20% more often per month",
        "Avg. coffee: MX$40",
        "Extra monthly revenue: MX$8000",
        "Cost of rewards: MX$450",
        <>
          Net gain: <Price value="MX$7550" /> extra per month
        </>,
      ],
    },
    {
      title: "Nail Salon (50% off 6th visit)",
      details: [
        "100 customers, visiting 20% more often per month",
        "Avg. service price: MX$500",
        "Extra monthly revenue: MX$10,000",
        "Cost of rewards: MX$1250",
        <>
          Net gain: <Price value="MX$8750" /> extra per month
        </>,
      ],
    },
  ];

  return (
    <SectionWrapper
      title="Real Business Examples"
      subtitle="Here's how your business could benefit from a loyalty program, with just 100 active customers."
      backgroundColor="#3239fb"
      className="text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 pt-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col relative"
          >
            <div className="absolute -top-4 -left-4 bg-[#e4646d] text-white px-4 py-2 rounded-lg font-extrabold text-sm uppercase tracking-wider">
              EXAMPLE {index + 1}
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-xl font-black mb-4 text-gray-700">
                {example.title}
              </h3>
              <ul className="space-y-2">
                {example.details.map((detail, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BusinessExamples;
