import React from "react";
import SectionWrapper from "./ui/SectionWrapper";

const Price: React.FC<{ value: string }> = ({ value }) => (
  <span className="font-bold text-green-600 whitespace-pre"> {value} </span>
);

type DetailItem =
  | string
  | JSX.Element
  | {
      label: string;
      subDetails: (string | JSX.Element)[];
    };

const BusinessExamples: React.FC = () => {
  const examples: Array<{
    title: string;
    details: DetailItem[];
  }> = [
    {
      title: "Café (10th coffee free)",
      details: [
        "100 customers, visiting 20% more often per month",
        "Avg. coffee price: MX$40",
        "Extra monthly revenue: MX$8000",
        {
          label: "Cost of rewards",
          subDetails: [
            "Lost revenue: MX$400 (10 × MX$40)",
            "Starter Plan subscription: MX$450 per month",
          ],
        },
        <>
          Net gain: <Price value="MX$7150" /> extra per month
        </>,
      ],
    },
    {
      title: "Nail Salon (50% off 6th visit)",
      details: [
        "100 customers, visiting 20% more often per month",
        "Avg. service price: MX$500",
        "Extra monthly revenue: MX$10,000",
        {
          label: "Cost of rewards",
          subDetails: [
            "Lost revenue: MX$1,250 (5 × MX$250)",
            "Starter Plan subscription: MX$450 per month",
          ],
        },
        <>
          Net gain: <Price value="MX$8300" /> extra per month
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 sm:px-4">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 pt-10 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col relative"
          >
            <div className="absolute -top-4 -left-4 bg-[#e4646d] text-white px-4 py-2 rounded-lg font-extrabold text-sm uppercase tracking-wider">
              EXAMPLE {index + 1}
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-black mb-6 text-gray-700">
                {example.title}
              </h3>
              <ul className="space-y-3">
                {example.details.map((detail, i) => {
                  // nested group
                  if (
                    typeof detail === "object" &&
                    !React.isValidElement(detail) &&
                    "label" in detail
                  ) {
                    return (
                      <li key={i} className="text-gray-700">
                        <div className="font-semibold">{detail.label}</div>
                        <ul className="ml-4 mt-1 space-y-1">
                          {detail.subDetails.map((sub, j) => (
                            <li
                              key={j}
                              className="text-gray-700 flex items-start"
                            >
                              <span className="text-secondary mr-2">•</span>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  // regular string or React fragment
                  return (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {detail}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BusinessExamples;
