import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FinancialLadder from './components/FinancialLadder.jsx';
import ToolsSection from './components/ToolsSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500/30 selection:text-white">
      {/* Global layered gradient background */}
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(700px_400px_at_10%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(45,212,191,0.10),transparent),radial-gradient(1000px_600px_at_50%_100%,rgba(99,102,241,0.10),transparent)]" />

      <Navbar />
      <HeroSection />
      <FinancialLadder />
      <ToolsSection />

      <footer id="about" className="relative border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-slate-300/80">
            Disclaimer: Educational content is designed for learning purposes and will reference Scopus-indexed journals and accredited financial literature. Not financial advice.
          </p>
          <p className="text-xs text-slate-400/70 mt-2">© {new Date().getFullYear()} Financeal</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
