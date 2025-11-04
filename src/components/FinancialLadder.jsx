import React, { useState } from 'react';
import { Shield, Lock, TrendingUp } from 'lucide-react';

const steps = [
  { key: 'stability', title: 'Stability', desc: 'Budgeting, tracking expenses, and eliminating high-interest debt.', icon: Shield },
  { key: 'security', title: 'Security', desc: 'Build 3–6 months emergency fund and basic insurance coverage.', icon: Lock },
  { key: 'growth', title: 'Growth', desc: 'Invest regularly and plan multi-term goals for wealth building.', icon: TrendingUp },
];

export default function FinancialLadder() {
  const [active, setActive] = useState(1);

  return (
    <section id="ladder" className="relative py-20 bg-[linear-gradient(180deg,#050b13_0%,#071420_100%)] text-white">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">The Financial Ladder</h2>
          <p className="mt-3 text-white/70">Progress through stages with an interactive, futuristic ladder. Each step glows and rotates as you advance.</p>
        </div>

        {/* 3D-esque ladder */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative perspective-[1200px]">
            <div className="relative h-80 sm:h-96 w-full mx-auto [transform-style:preserve-3d]" style={{ transform: 'rotateX(12deg) rotateY(-16deg)' }}>
              {steps.map((s, i) => {
                const progress = i < active ? 'bg-teal-400/80' : 'bg-white/10';
                const glow = i < active ? 'shadow-[0_0_40px_rgba(45,212,191,0.5)] border-teal-300/80' : 'shadow-[0_0_20px_rgba(255,255,255,0.06)] border-white/10';
                const translate = `translateZ(${(i + 1) * 30}px)`;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(i + 1)}
                    className={`group absolute left-1/2 -translate-x-1/2 w-64 sm:w-80 h-16 sm:h-20 rounded-2xl border ${glow} transition-all duration-500`} 
                    style={{ top: `${20 + i * 28}%`, transform: `translateX(-50%) ${translate}` }}
                    aria-label={`Activate ${s.title}`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0" />
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition ${progress}" />
                    <div className="relative z-10 flex items-center gap-3 px-5 h-full text-left">
                      <s.icon className="w-5 h-5 text-neutral-900" />
                      <div>
                        <div className="font-semibold text-neutral-900">{s.title}</div>
                        <div className="text-xs text-neutral-900/80">Step {i + 1}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-widest text-white/60">Current Stage</div>
                <div className="mt-1 text-2xl font-bold">{steps[active - 1].title}</div>
              </div>
              <div className="w-24 h-24 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="42" stroke="#0f172a" strokeWidth="10" fill="none" />
                  <circle
                    cx="50" cy="50" r="42"
                    stroke="url(#grad)" strokeWidth="10" fill="none"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (active / steps.length) * 264}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 600ms ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-teal-300 font-semibold">
                  {Math.round((active / steps.length) * 100)}%
                </div>
              </div>
            </div>
            <p className="mt-4 text-white/80 min-h-[56px]">{steps[active - 1].desc}</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {steps.map((s, i) => (
                <div key={s.key} className={`rounded-xl px-3 py-2 border ${i < active ? 'border-teal-300/60 bg-teal-300/10' : 'border-white/10 bg-white/5'}`}>
                  <div className="text-xs text-white/60">Step {i + 1}</div>
                  <div className="text-sm font-medium">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
