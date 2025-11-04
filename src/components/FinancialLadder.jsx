import React, { useState } from 'react';

const steps = [
  { key: 'stability', title: 'Stability', desc: 'Build a baseline: budget, essentials, and controlled spending.' },
  { key: 'security', title: 'Security', desc: 'Create cushions: emergency fund and insurance coverage.' },
  { key: 'growth', title: 'Growth', desc: 'Invest for long-term wealth and multiple goals.' },
];

const FinancialLadder = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="ladder" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Financial Ladder</h2>
          <p className="mt-2 text-slate-300/90 max-w-2xl">Progress through clear stages. Each step lights up and rotates slightly as you advance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D-esque ladder */}
          <div className="relative h-[360px] md:h-[420px]">
            <div className="absolute inset-0 perspective-[1200px]">
              <div className="relative w-full h-full transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
                {steps.map((s, i) => {
                  const isActive = i <= active;
                  const depth = i * 60;
                  const rotate = isActive ? 2 : 0;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActive(i)}
                      className={`absolute left-1/2 -translate-x-1/2 w-[80%] md:w-[70%] h-20 md:h-24 rounded-xl border transition-all duration-500 ${
                        isActive ? 'border-teal-300/40 bg-teal-400/10 shadow-[0_0_40px_0_rgba(45,212,191,0.25)]' : 'border-white/10 bg-white/5'
                      }`}
                      style={{
                        transform: `translateZ(${depth}px) rotateX(${rotate}deg) translateY(${i * 18}px)`,
                      }}
                    >
                      <div className="px-4 md:px-6 h-full flex items-center justify-between">
                        <div>
                          <p className={`text-sm uppercase tracking-wider ${isActive ? 'text-teal-200' : 'text-slate-300/80'}`}>{s.title}</p>
                          <p className="text-xs md:text-sm text-slate-300/80 mt-1">{s.desc}</p>
                        </div>
                        <div className={`h-10 w-10 rounded-full border flex items-center justify-center ${isActive ? 'border-teal-300/50 bg-teal-400/10' : 'border-white/10 bg-white/5'}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.8)]' : 'bg-slate-400/60'}`} />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress card */}
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-white/10">
            <p className="text-slate-300/90">Your progress</p>
            <div className="mt-4">
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 transition-all duration-700"
                  style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                />
              </div>
              <div className="mt-4 text-sm text-slate-300/80">
                Step {active + 1} of {steps.length}: <span className="text-teal-200 font-medium">{steps[active].title}</span>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {steps.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    i === active ? 'border-teal-300/50 bg-teal-400/10 text-teal-100' : 'border-white/10 bg-white/5 text-slate-200/90 hover:bg-white/10'
                  }`}
                >
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="text-xs mt-1 opacity-80 line-clamp-2">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialLadder;
