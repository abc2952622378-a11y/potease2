/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { SupplyChainView } from './views/SupplyChainView';
import { AboutView } from './views/AboutView';
import { GlobalLayoutView } from './views/GlobalLayoutView';
import { ViewType } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = React.useState<ViewType>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={setCurrentView} />;
      case 'products':
        return <ProductsView />;
      case 'supply-chain':
        return <SupplyChainView />;
      case 'about':
        return <AboutView />;
      case 'global-layout':
        return <GlobalLayoutView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as ViewType;
      if (['home', 'products', 'supply-chain', 'about', 'global-layout'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: ViewType) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
