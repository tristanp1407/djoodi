import React from 'react';
import Container from './Container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
};

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };
  
  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`} id={id}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;