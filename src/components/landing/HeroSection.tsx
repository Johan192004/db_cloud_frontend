import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="bg-secondary-500/20 text-secondary-300 px-4 py-2 rounded-full text-sm font-semibold">
                ☁️ Cloud Database Management
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Deploy your databases in
              <span className="block mt-2 bg-gradient-to-r from-secondary-300 to-primary-300 bg-clip-text text-transparent">
                seconds
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              CrudCloud allows you to create and manage real cloud database instances 
              with a single click. MySQL, PostgreSQL, MongoDB, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="secondary" size="lg" onClick={() => navigate('/register')}>
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => scrollToSection('how-it-works')}
              >
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary-300">6</div>
                <div className="text-sm text-gray-400">DB Engines</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-300">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-300">&lt;30s</div>
                <div className="text-sm text-gray-400">Deploy Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">New Instance</span>
                  <span className="bg-green-500 text-xs px-2 py-1 rounded-full">CREATING</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Engine</div>
                    <div className="text-white font-semibold">PostgreSQL 15</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Host</div>
                    <div className="text-white font-mono text-sm">db.crudcloud.com:5432</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-gray-400 text-xs mb-1">Database</div>
                    <div className="text-white font-mono text-sm">prod_db_2024</div>
                  </div>
                </div>

                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-400 to-secondary-400 h-full w-3/4 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
