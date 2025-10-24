import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-3 hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="mx-3 hover:text-gray-400">
            LinkedIn
          </a>
          <a href="#" className="mx-3 hover:text-gray-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
