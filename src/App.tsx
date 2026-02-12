import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UserStats from "./components/UserStats";
import BusinessExamples from "./components/BusinessExamples";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarketingCapabilities from "./components/MarketingCapabilities";

function App() {
  const { t, i18n } = useTranslation('common');

  // Update page title and HTML lang attribute
  useEffect(() => {
    document.title = t('meta.title');
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <UserStats />
      <BusinessExamples />
      <MarketingCapabilities />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
