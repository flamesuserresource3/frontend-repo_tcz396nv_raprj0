import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0b1220,transparent_60%),radial-gradient(circle_at_80%_0%,#0a2a3d,transparent_50%),#030712]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Glassmorphism overlay content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 pt-24 pb-12">
        <div className="max-w-3xl backdrop-blur-xl/50 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,255,255,0.08)]">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Financeal: <span className="text-teal-300">Climb Your Financial Ladder</span>
          </h1>
          <p className="mt-4 text-sky-100/80 text-base sm:text-lg leading-relaxed">
            A Web3-inspired, professional-grade platform for financial literacy and planning. Learn, plan, and grow with immersive 3D visuals and elegant micro-interactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#ladder"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-teal-400/90 text-neutral-900 font-medium shadow hover:bg-teal-300 transition"
            >
              Explore the Ladder
            </a>
            <a
              href="#tools"
              className="inline-flex items-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition"
            >
              Try the Tools
            </a>
          </div>
        </div>
      </div>
      {/* Gradient bloom that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#06121d]/30 to-[#02060b]" />
    </section>
  );
}
