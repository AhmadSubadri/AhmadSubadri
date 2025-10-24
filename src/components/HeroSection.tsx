import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-light-gray py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">
          Let's Build Your Next Innovation
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          I'm a passionate developer ready to turn your ideas into reality.
        </p>
        <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
