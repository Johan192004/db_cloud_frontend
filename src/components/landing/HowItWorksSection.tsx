import React from 'react';
import Container from '../common/Container';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Sign Up',
      description: 'Create your account in minutes. Individual users and organizations are welcome.',
      icon: '👤',
    },
    {
      step: '02',
      title: 'Choose Your Engine',
      description: 'Select from MySQL, PostgreSQL, MongoDB, Redis, SQL Server, or Cassandra.',
      icon: '🎯',
    },
    {
      step: '03',
      title: 'Configure Instance',
      description: 'Define the name (on paid plans) and set up basic parameters.',
      icon: '⚙️',
    },
    {
      step: '04',
      title: 'Automatic Deploy',
      description: 'Your database deploys in Docker containers in less than 30 seconds.',
      icon: '🚀',
    },
    {
      step: '05',
      title: 'Get Credentials',
      description: 'Receive host, port, username, and password. Download the PDF with all info.',
      icon: '🔑',
    },
    {
      step: '06',
      title: 'Easy Management',
      description: 'Pause, resume, rotate passwords, or delete instances from your dashboard.',
      icon: '📊',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Six simple steps to get your database ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connection Line (hidden on mobile, visible on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
