import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import { DATABASE_ENGINES } from '../../constants/data';

const DatabaseEnginesSection: React.FC = () => {
  return (
    <section id="engines" className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Available
            <span className="gradient-text"> Engines</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from the most popular database engines on the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATABASE_ENGINES.map((engine) => (
            <Card key={engine.id} hover>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-5xl">{engine.icon}</div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${engine.color}`}></div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {engine.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {engine.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Available</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DatabaseEnginesSection;
