import React from "react";
import Section from "./ui/Section";

const Examples: React.FC = () => (
  <Section id="examples" background="light">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Here’s how your business would benefit:
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">
          Example 1: Café (10th coffee free)
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>100 customers, visiting 20% more often per month</li>
          <li>Avg. coffee: MX$40</li>
          <li>Extra monthly revenue: MX$8,000</li>
          <li>Cost of rewards: MX$400</li>
          <li>Net gain: MX$7,600 extra per month</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">
          Example 2: Nail Salon (50% off 6th visit)
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>100 customers, visiting 20% more often per month</li>
          <li>Avg. service price: MX$500</li>
          <li>Extra monthly revenue: MX$10,000</li>
          <li>Cost of rewards: MX$1,250</li>
          <li>Net gain: MX$8,750 extra per month</li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Examples;