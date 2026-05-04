import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surfaceHighlight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-heading font-bold tracking-tighter">
              <span className="text-accentPrimary">&lt;</span>Rozinul<span className="text-accentSecondary">/&gt;</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="hover:text-accentPrimary transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-accentPrimary transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-accentPrimary transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-accentPrimary transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="text-textMuted hover:text-white focus:outline-none focus:text-white transition-colors"
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden border-t border-surfaceHighlight bg-surface/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accentPrimary hover:bg-surfaceHighlight transition-colors duration-300">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accentPrimary hover:bg-surfaceHighlight transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accentPrimary hover:bg-surfaceHighlight transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-accentPrimary hover:bg-surfaceHighlight transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
