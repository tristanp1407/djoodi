import React from "react";
import Section from "./ui/Section";

const Enterprise: React.FC = () => (
  <Section id="enterprise" background="white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Keep your customers engaged (Enterprise plan)
        </h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Connect with your customers like an online store would:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            User enters their email to get loyalty card
            <span className="text-gray-500"> (Don’t worry, they can opt out of marketing emails.)</span>
          </li>
          <li>
            Have a new product in store and want to let them know? You can now email them to get them excited!
          </li>
          <li>
            Send push notifications when customers are close to your store:
            <span className="italic text-gray-500"> “You’re 2 stamps away from your free coffee!”</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Enterprise;