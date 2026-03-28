import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-neutral-800 bg-stone-100 dark:bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-12 md:px-16 py-24 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-6">
          <div className="text-xl font-bold text-stone-900 dark:text-white font-headline">Potease (浦泰斯)</div>
          <p className="font-inter text-xs leading-relaxed uppercase tracking-widest text-stone-500 dark:text-neutral-500">
            Precision Engineering & Global Supply Chain Orchestration.<br/>
            精密工程与全球供应链调度。自从 2025.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-stone-900 dark:text-white uppercase text-xs tracking-[0.2em]">Contact Information</h4>
          <ul className="space-y-2 font-inter text-xs leading-relaxed uppercase tracking-widest text-stone-500 dark:text-neutral-500">
            <li><a className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="tel:+8613817925550">+86 13817925550</a></li>
            <li><a className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="mailto:257870817@qq.com">257870817@qq.com</a></li>
            <li>Shanghai, China</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-stone-900 dark:text-white uppercase text-xs tracking-[0.2em]">Quick Links & Legal</h4>
          <div className="flex flex-col gap-2 font-inter text-xs leading-relaxed uppercase tracking-widest text-stone-500 dark:text-neutral-500">
            <button className="text-left hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Supply Chain Solutions</button>
            <button className="text-left hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Wholesale Network</button>
            <button className="text-left hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
      <div className="w-full py-8 border-t border-stone-200/50 dark:border-neutral-900 text-center font-inter text-[10px] leading-relaxed uppercase tracking-[0.3em] text-stone-400">
        © 2025 Potease (浦泰斯). Precision Engineering & Global Supply. All rights reserved.
      </div>
    </footer>
  );
};
