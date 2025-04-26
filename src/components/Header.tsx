import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl gradient-text">
            djoodi
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-6">
              <li><a href="#benefits" className="text-white hover:text-accent transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-white hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-white hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-white hover:text-accent transition-colors">Testimonials</a></li>
            </ul>
          </nav>
          <Button variant="secondary" size="sm">Get Started</Button>
        </div>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md py-4 animate-fade-in-down">
          <Container>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <a 
                    href="#benefits" 
                    className="block py-2 text-primary hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    className="block py-2 text-primary hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="block py-2 text-primary hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="block py-2 text-primary hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                </li>
                <li className="pt-2">
                  <Button 
                    variant="primary" 
                    className="w-full" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;