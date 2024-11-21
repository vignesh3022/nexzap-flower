import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex-shrink-0 font-bold text-2xl cursor-pointer"
          >
            Logo
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block hover:text-gray-300 transition-colors duration-300 px-3 py-2 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block hover:text-gray-300 transition-colors duration-300 px-3 py-2 w-full text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block hover:text-gray-300 transition-colors duration-300 px-3 py-2 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block hover:text-gray-300 transition-colors duration-300 px-3 py-2 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 