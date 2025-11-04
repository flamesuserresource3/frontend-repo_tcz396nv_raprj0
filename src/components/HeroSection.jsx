import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient bloom overlay - must not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(45,212,191,0.18),transparent),radial-gradient(600px_300px_at_20%_10%,rgba(99,102,241,0.15),transparent)]" />

      {/* Content Overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-slate-900/55 border border-white/10 shadow-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Financeal: <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300">Climb Your Financial Ladder</span>
          </h1>
          <p className="mt-4 text-slate-200/90 leading-relaxed">
            A Web3-inspired financial literacy and planning platform. Learn in clear stages, visualize progress in 3D, and plan with elegant, real-time tools.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#ladder" className="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 text-white font-medium shadow-lg shadow-teal-500/20 hover:brightness-110 transition">
              Explore the Ladder
            </a>
            <a href="#tools" className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-100 border border-white/10 transition">
              Try the Tools
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-300/70">
            All educational insights will be sourced from Scopus-indexed journals and accredited financial literature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
