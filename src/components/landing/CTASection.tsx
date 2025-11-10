import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 gradient-bg">
      <Container>
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join hundreds of developers who are already deploying their databases 
            in seconds with CrudCloud
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              Contact Sales
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-secondary-300 mb-2">100%</div>
              <div className="text-gray-400">Secure & Reliable</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 mb-2">24/7</div>
              <div className="text-gray-400">Technical Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 mb-2">$0</div>
              <div className="text-gray-400">To Get Started</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
