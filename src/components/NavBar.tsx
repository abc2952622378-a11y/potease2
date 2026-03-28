import React from 'react';
import { ViewType } from '../types';

interface NavBarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentView, onNavigate }) => {
  const navLinks: { id: ViewType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'supply-chain', label: 'Supply Chain' },
    { id: 'about', label: 'About' },
    { id: 'global-layout', label: 'Global Layout' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-sm shadow-stone-200/50 dark:shadow-neutral-950/50">
      <div className="flex justify-between items-center w-full px-8 md:px-12 py-4 max-w-[1920px] mx-auto">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-black tracking-tighter text-neutral-900 dark:text-white font-headline hover:scale-105 transition-transform duration-300"
        >
          Potease 浦泰斯
        </button>
        
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 font-manrope font-semibold tracking-tight text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link pb-1 border-b-2 transition-all duration-300 hover:scale-105 ${
                currentView === link.id
                  ? 'text-stone-900 dark:text-white border-stone-700 dark:border-stone-400'
                  : 'text-stone-500 dark:text-neutral-400 border-transparent hover:text-stone-800 dark:hover:text-stone-200'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('about')} 
            className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-bold text-sm smile-curve hover:scale-105 active:scale-95 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};
