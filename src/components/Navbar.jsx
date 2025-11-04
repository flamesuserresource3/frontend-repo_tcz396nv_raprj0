import React from 'react';
import { Rocket, LineChart, Shield, Target } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Rocket className="w-5 h-5 text-teal-300" />
          <span className="font-semibold tracking-tight">Financeal</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#ladder" className="hover:text-white transition inline-flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-300" /> Ladder
          </a>
          <a href="#tools" className="hover:text-white transition inline-flex items-center gap-2">
            <LineChart className="w-4 h-4 text-teal-300" /> Tools
          </a>
          <a href="#goals" className="hover:text-white transition inline-flex items-center gap-2">
            <Target className="w-4 h-4 text-teal-300" /> Goals
          </a>
        </nav>
        <a href="#tools" className="px-3 py-1.5 rounded-lg bg-teal-400 text-neutral-900 font-medium shadow hover:bg-teal-300 transition text-sm">
          Get Started
        </a>
      </div>
    </header>
  );
}
