import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-lg 
        p-6 
        ${hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-2xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
