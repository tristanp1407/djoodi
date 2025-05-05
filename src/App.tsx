import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UserStats from "./components/UserStats";
import BusinessExamples from "./components/BusinessExamples";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import MarketingCapabilities from "./components/MarketingCapabilities";

function App() {
  // Update page title
  useEffect(() => {
    document.title = "djoodi | Digital Loyalty for Local Businesses";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <UserStats />
      <BusinessExamples />
      <MarketingCapabilities />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
