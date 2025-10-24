import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-primary">
            MyPortfolio
          </NavLink>
        </div>
        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `my-1 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-700'
                } hover:text-primary md:mx-4 md:my-0`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `my-1 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-700'
                } hover:text-primary md:mx-4 md:my-0`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `my-1 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-700'
                } hover:text-primary md:mx-4 md:my-0`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `my-1 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-700'
                } hover:text-primary md:mx-4 md:my-0`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
