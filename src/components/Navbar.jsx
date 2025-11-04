import React from 'react';
import { Rocket, Home, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-teal-400/10 border border-teal-300/20">
            <Rocket className="h-5 w-5 text-teal-300" />
          </div>
          <span className="text-teal-200 font-semibold tracking-tight">Financeal</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
          <a href="#home" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#ladder" className="hover:text-white transition-colors">Financial Ladder</a>
          <a href="#tools" className="hover:text-white transition-colors">Tools</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-100 border border-white/10 transition-colors">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-tr from-teal-500 to-sky-500 text-white shadow-lg shadow-teal-500/20 border border-white/10">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
