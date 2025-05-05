import React from "react";
import Background from "./Background";
import Section from "./Section";

interface SectionWrapperProps {
  id?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  backgroundColor = "#fefced",
  className = "",
}) => {
  const getBackgroundType = (color: string) => {
    if (color === "#3239fb") return "blue";
    return "none";
  };

  return (
    <Background backgroundColor={backgroundColor}>
      <Section id={id} background="none">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${className}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl max-w-3xl mx-auto ${className}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={className}>{children}</div>
      </Section>
    </Background>
  );
};

export default SectionWrapper;
