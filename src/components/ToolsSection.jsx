import React, { useMemo, useState } from 'react';

const numberFmt = (n) => {
  if (Number.isNaN(n) || n === undefined || n === null) return '0';
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

const ToolsSection = () => {
  // Salary Allocation (50/30/20 baseline with custom sliders)
  const [income, setIncome] = useState(1000);
  const [needs, setNeeds] = useState(50);
  const [wants, setWants] = useState(30);
  const savings = Math.max(0, 100 - (needs + wants));

  const needsValue = useMemo(() => (income * needs) / 100, [income, needs]);
  const wantsValue = useMemo(() => (income * wants) / 100, [income, wants]);
  const savingsValue = useMemo(() => income - needsValue - wantsValue, [income, needsValue, wantsValue]);

  // Emergency Fund Planner
  const [months, setMonths] = useState(3);
  const monthlyExpense = useMemo(() => Math.max(0, Math.round(needsValue)), [needsValue]);
  const targetFund = useMemo(() => monthlyExpense * months, [monthlyExpense, months]);

  // Goal Tracker (simple one-goal visual)
  const [goalName, setGoalName] = useState('Investment Portfolio');
  const [goalTarget, setGoalTarget] = useState(5000);
  const [goalSaved, setGoalSaved] = useState(1200);
  const goalProgress = Math.min(100, Math.max(0, (goalSaved / Math.max(1, goalTarget)) * 100));

  return (
    <section id="tools" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Planning Tools</h2>
          <p className="mt-2 text-slate-300/90 max-w-2xl">Elegant, real-time calculators with smooth micro-interactions.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Salary Allocation */}
          <div className="p-5 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-white/10">
            <h3 className="font-semibold text-white">Salary Allocation</h3>
            <p className="text-xs text-slate-300/80">Adjust your monthly income and allocation ratios.</p>
            <div className="mt-4 space-y-3">
              <label className="block text-sm text-slate-200/90">Monthly Income ($)</label>
              <input
                type="number"
                className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-slate-100"
                value={income}
                onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300/80">Needs (%)</label>
                  <input type="range" min={0} max={100 - wants} value={needs} onChange={(e) => setNeeds(Number(e.target.value))} className="w-full" />
                  <p className="text-xs mt-1 text-teal-200">${numberFmt(needsValue)} • {needs}%</p>
                </div>
                <div>
                  <label className="block text-xs text-slate-300/80">Wants (%)</label>
                  <input type="range" min={0} max={100 - needs} value={wants} onChange={(e) => setWants(Number(e.target.value))} className="w-full" />
                  <p className="text-xs mt-1 text-sky-200">${numberFmt(wantsValue)} • {wants}%</p>
                </div>
              </div>
              <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-teal-400 transition-all" style={{ width: `${needs}%` }} />
                <div className="h-full bg-sky-400 transition-all" style={{ width: `${wants}%` }} />
                <div className="h-full bg-indigo-400 transition-all" style={{ width: `${savings}%` }} />
              </div>
              <p className="text-xs text-slate-300/80">Savings/Investing: <span className="text-indigo-200 font-medium">${numberFmt(savingsValue)}</span> • {savings}%</p>
            </div>
          </div>

          {/* Emergency Fund */}
          <div className="p-5 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-white/10">
            <h3 className="font-semibold text-white">Emergency Fund Planner</h3>
            <p className="text-xs text-slate-300/80">Based on your current essential spending.</p>
            <div className="mt-4 space-y-3">
              <label className="block text-xs text-slate-300/80">Months of Coverage</label>
              <input type="range" min={1} max={12} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-200/90">{months} months</span>
                <span className="text-teal-200 font-medium">Target: ${numberFmt(targetFund)}</span>
              </div>
              <div className="mt-2 h-36 relative">
                <svg viewBox="0 0 100 100" className="absolute inset-0">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.15)" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#grad)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(targetFund ? 1 : 0) * 251.2} 251.2`}
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="54" textAnchor="middle" fontSize="14" fill="#a7f3d0">{months}m</text>
                </svg>
              </div>
              <p className="text-xs text-slate-300/80">Assumes essential costs mirror your “Needs” allocation.</p>
            </div>
          </div>

          {/* Goal Tracker */}
          <div className="p-5 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-white/10">
            <h3 className="font-semibold text-white">Goal Tracker</h3>
            <p className="text-xs text-slate-300/80">Track progress toward a specific target.</p>
            <div className="mt-4 space-y-3">
              <label className="block text-xs text-slate-300/80">Goal Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-slate-100"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300/80">Target ($)</label>
                  <input type="number" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-slate-100" value={goalTarget} onChange={(e) => setGoalTarget(Math.max(1, Number(e.target.value)))} />
                </div>
                <div>
                  <label className="block text-xs text-slate-300/80">Saved ($)</label>
                  <input type="number" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-slate-100" value={goalSaved} onChange={(e) => setGoalSaved(Math.max(0, Number(e.target.value)))} />
                </div>
              </div>
              <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 transition-all" style={{ width: `${goalProgress}%` }} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-200/90">{goalName}</span>
                <span className="text-teal-200 font-medium">{goalProgress.toFixed(0)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
