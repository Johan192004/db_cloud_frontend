import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <span className="text-2xl font-bold gradient-text">CrudCloud</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('engines')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
            >
              Engines
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
            >
              How It Works
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('engines')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors py-2"
            >
              Engines
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors py-2"
            >
              How It Works
            </button>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
