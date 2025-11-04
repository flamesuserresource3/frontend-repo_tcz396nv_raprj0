import React, { useMemo, useState } from 'react';
import { Calculator, Wallet, PiggyBank, Target } from 'lucide-react';

function Bar({ value, color = '#22d3ee' }) {
  return (
    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color, transition: 'width 500ms ease' }}
      />
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-[radial-gradient(ellipse_at_bottom,#071420_0%,#050b13_60%,#03080e_100%)] text-white">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Planning Tools</h2>
          <p className="mt-3 text-white/70">Simple, elegant calculators with animated results and clean charts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Salary Allocation" icon={Calculator}>
            <SalaryAllocator />
          </Card>
          <Card title="Emergency Fund" icon={PiggyBank}>
            <EmergencyFund />
          </Card>
          <Card title="Goal Tracker" icon={Target}>
            <GoalTracker />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/7 transition group shadow-[0_8px_40px_rgba(34,211,238,0.06)]">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-teal-300" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function SalaryAllocator() {
  const [income, setIncome] = useState(800);
  const needs = Math.min(100, Math.round((income * 0.5) / income * 100));
  const wants = Math.min(100, Math.round((income * 0.3) / income * 100));
  const save = 100 - needs - wants;

  return (
    <div>
      <label className="text-sm text-white/70">Monthly Income (USD)</label>
      <input type="range" min="200" max="5000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" />
      <div className="mt-2 text-sm text-white/80">${income.toLocaleString()}</div>
      <div className="mt-4 space-y-3">
        <Row label="Needs (50%)" value={`${needs}%`}>
          <Bar value={needs} color="#0ea5e9" />
        </Row>
        <Row label="Wants (30%)" value={`${wants}%`}>
          <Bar value={wants} color="#22d3ee" />
        </Row>
        <Row label="Savings (20%)" value={`${save}%`}>
          <Bar value={save} color="#14b8a6" />
        </Row>
      </div>
    </div>
  );
}

function EmergencyFund() {
  const [expense, setExpense] = useState(600);
  const [months, setMonths] = useState(3);
  const target = expense * months;
  const [saved, setSaved] = useState(400);
  const progress = Math.min(100, Math.round((saved / target) * 100));

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-white/70">Monthly Expense</label>
          <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 mt-1" value={expense} onChange={e => setExpense(Number(e.target.value || 0))} />
        </div>
        <div>
          <label className="text-sm text-white/70">Months</label>
          <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 mt-1" value={months} onChange={e => setMonths(Math.max(1, Number(e.target.value || 0)))} />
        </div>
      </div>
      <div className="mt-3">
        <label className="text-sm text-white/70">Saved</label>
        <input type="range" min="0" max={Math.max(1000, target)} value={saved} onChange={(e) => setSaved(Number(e.target.value))} className="w-full" />
        <div className="mt-1 text-sm text-white/80">${saved.toLocaleString()} / ${target.toLocaleString()}</div>
      </div>
      <div className="mt-4">
        <Bar value={progress} color="#14b8a6" />
        <div className="mt-2 text-teal-300 text-sm font-medium">{progress}% to target</div>
      </div>
    </div>
  );
}

function GoalTracker() {
  const [goal, setGoal] = useState(5000);
  const [monthly, setMonthly] = useState(300);
  const [months, setMonths] = useState(12);

  const total = useMemo(() => monthly * months, [monthly, months]);
  const progress = Math.min(100, Math.round((total / goal) * 100));

  return (
    <div id="goals">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Goal" value={goal} onChange={setGoal} />
        <Field label="Monthly" value={monthly} onChange={setMonthly} />
        <Field label="Months" value={months} onChange={setMonths} />
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 100 40" className="w-full h-20">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <rect x="2" y="10" width="96" height="1" fill="#0b1220" />
          <circle cx="2" cy="10" r="2" fill="#0b1220" />
          <circle cx={2 + (96 * progress) / 100} cy="10" r="3" fill="url(#grad2)" />
          <path d={`M2,35 C20,${30 - progress / 6} 60,${30 - progress / 8} 98,${28 - progress / 10}`} stroke="url(#grad2)" strokeWidth="2" fill="none" style={{ transition: 'd 500ms ease' }} />
        </svg>
        <div className="mt-1 text-sm text-white/80">Projected savings: ${total.toLocaleString()} ({progress}%)</div>
        <Bar value={progress} color="#22d3ee" />
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 mt-1" value={value} onChange={e => onChange(Number(e.target.value || 0))} />
    </div>
  );
}

function Row({ label, value, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="w-28 text-xs text-white/70">{label}</div>
      <div className="flex-1">{children}</div>
      <div className="w-12 text-right text-xs text-white/80">{value}</div>
    </div>
  );
}
