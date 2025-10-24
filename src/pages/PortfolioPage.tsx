import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const PortfolioPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-[#0A2540]">Portfolio</h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Here are some of my recent projects.
        </p>
        {/* Add portfolio items here */}
      </div>
    </AnimatedPage>
  );
};

export default PortfolioPage;
