import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import ProfitVisualization from './components/ProfitVisualization';
import Pricing from './components/Pricing';
import Setup from './components/Setup';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = "djoodi | Digital Loyalty for Local Businesses";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <ProfitVisualization />
      <Pricing />
      <Setup />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;