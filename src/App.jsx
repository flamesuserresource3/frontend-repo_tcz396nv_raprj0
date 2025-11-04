import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FinancialLadder from './components/FinancialLadder';
import ToolsSection from './components/ToolsSection';

function Footer() {
  return (
    <footer className="py-10 text-center text-white/60 bg-black/60 border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-10">
        <p className="text-sm">Educational content should be referenced from accredited journals and literature. This demo focuses on visuals and planning tools.</p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} Financeal</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-teal-300 selection:text-black">
      <Navbar />
      <HeroSection />
      <FinancialLadder />
      <ToolsSection />
      <Footer />
    </div>
  );
}
