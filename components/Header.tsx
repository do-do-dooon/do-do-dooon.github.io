
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-dark-blue/10 dark:border-white/10 transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary w-8 h-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">Julian Thorne</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="nav-link text-sm font-medium" href="#works">Works</a>
          <a className="nav-link text-sm font-medium" href="#about">About</a>
          <a className="nav-link text-sm font-medium" href="#discography">Discography</a>
          <a className="nav-link text-sm font-medium" href="#events">Event</a>
          <a className="nav-link text-sm font-medium" href="#text">Text</a>
          <a className="nav-link text-sm font-medium" href="#contact">Contact</a>
        </nav>

        <button className="md:hidden p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
