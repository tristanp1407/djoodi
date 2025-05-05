import React from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";

const FinalCTA: React.FC = () => (
  <Section background="light">
    <div className="max-w-3xl mx-auto text-center py-16">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Let’s create your branded loyalty card
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Ready to start giving your customers some love? Get in touch to start your setup—it takes minutes!
      </p>
      <Button variant="primary" size="lg">
        Get in touch
      </Button>
    </div>
  </Section>
);

export default FinalCTA;