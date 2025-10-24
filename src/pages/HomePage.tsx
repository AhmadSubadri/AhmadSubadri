import React from 'react';
import HeroSection from '../components/HeroSection';
import AnimatedPage from '../components/AnimatedPage';

const HomePage: React.FC = () => {
  return (
    <AnimatedPage>
      <HeroSection />
    </AnimatedPage>
  );
};

export default HomePage;
