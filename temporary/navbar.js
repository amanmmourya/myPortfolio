"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [nameLoaded, setNameLoaded] = useState(false);

  useEffect(() => {
    // Trigger name animation on component mount
    const timer = setTimeout(() => setNameLoaded(true), 300);
    
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['About', 'Projects', 'Experiences', 'Endorsements', 'Contact'];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="navbar-container flex items-center justify-between px-6 lg:px-12 h-[10vh] max-w-7xl mx-auto">
        
        {/* Animated Name/Logo */}
        <div className="relative overflow-hidden">
          <span 
            className={`block text-white text-2xl lg:text-3xl font-bold transform transition-all duration-1000 ease-out ${
              nameLoaded 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'
            }`}
          >
            <span className="relative">
              {/* Gradient text effect */}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Aman
              </span>
              <span className="ml-2 text-white hover:text-purple-300 transition-colors duration-300">
                Mourya
              </span>
              
              {/* Animated underline */}
              <div 
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ${
                  nameLoaded ? 'w-full' : 'w-0'
                }`}
              />
            </span>
          </span>
          
          {/* Floating particles effect */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-70" />
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse opacity-60" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 font-medium tracking-wide ${
                    nameLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${(index + 1) * 150}ms`
                  }}
                >
                  {item}
                  
                  {/* Hover effect underline */}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 rounded-lg bg-purple-500/10 scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-500/10"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`} 
            />
            <X 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-purple-500/20">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 transform ${
                      isOpen 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;