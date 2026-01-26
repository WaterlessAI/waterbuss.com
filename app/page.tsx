"use client";
import React, { useState, useEffect } from "react";

// Ikonlar yerine basit SVG'ler kullanıyoruz ki hata vermesin
const IconWater = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;

const models = [
  { id: "mistral", name: "Mistral 7B", water: 4.5, grade: "A+" },
  { id: "claude", name: "Claude 3 Haiku", water: 8.2, grade: "A" },
  { id: "gpt4", name: "GPT-4 Turbo", water: 45.0, grade: "D" },
  { id: "gemini", name: "Gemini Ultra", water: 52.0, grade: "F" },
];

export default function Home() {
  const [count, setCount] = useState(50322281392);
  const [prompts, setPrompts] = useState(1000);
  const [selectedModel, setSelectedModel] = useState(models[0].id);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 3500), 1000);
    return () => clearInterval(interval);
  }, []);

  const activeModel = models.find(m => m.id === selectedModel) || models[0];
  const footprint = (prompts * 365 * activeModel.water) / 1000;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto font-sans">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-8 px-2 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-900/30 rounded flex items-center justify-center border border-cyan-500/30">
            <IconWater />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">WATERBUSS</h1>
        </div>
        <div className="text-xs font-mono text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-500/20 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          SYSTEM ONLINE
        </div>
      </header>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* 1. MAIN COUNTER (Büyük Kart) */}
        <div className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h2 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">Live Global Consumption</h2>
          <div className="text-5xl md:text-6xl font-bold font-mono text-white glow-text tracking-tighter transition-all">
            {count.toLocaleString()}
          </div>
          <div className="text-cyan-400 text-sm mt-4 font-mono">
            +3,500 L / second
          </div>
          <p className="text-gray-400 text-sm mt-8 max-w-md leading-relaxed">
            Visualizing the hidden environmental cost of Artificial Intelligence. Data based on global compute infrastructure analysis.
          </p>
        </div>

        {/* 2. CALCULATOR (Hesap Makinesi) */}
        <div className="md:col-span-1 md:row-span-2 bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 flex flex-col">
          <div className="text-white font-bold mb-6 flex items-center gap-2">
            <span className="text-cyan-400">⚡</span> Impact Calculator
          </div>

          <div className="space-y-6 flex-1">
            <div>
              <label className="text-xs text-gray-500 font-mono uppercase block mb-2">Daily Prompts</label>
              <input
                type="range" min="100" max="10000" step="100"
                value={prompts} onChange={(e) => setPrompts(Number(e.target.value))}
                className="w-full accent-cyan-400 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-right text-white font-mono mt-2">{prompts.toLocaleString()}</div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-mono uppercase block mb-2">Model</label>
              <select
                value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg p-3 text-sm text-white outline-none focus:border-cyan-500"
              >
                {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 text-center">
            <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Your Annual Footprint</div>
            <div className="text-4xl font-bold text-white tracking-tighter">
              {footprint.toFixed(0)}<span className="text-lg text-gray-600">L</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              ≈ {(footprint / 0.5).toFixed(0)} water bottles
            </div>
          </div>
        </div>

        {/* 3. LEADERBOARD (Liste) */}
        <div className="md:col-span-1 md:row-span-2 glass rounded-2xl p-0 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-white font-bold text-sm">Efficiency Index</h3>
            <IconZap />
          </div>
          <div className="flex-1 overflow-y-auto">
            {models.map((m, i) => (
              <div key={m.id} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                <div>
                  <div className="text-sm font-medium text-white">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.water}ml / query</div>
                </div>
                <div className={`
                  w-8 h-8 rounded flex items-center justify-center font-bold text-xs border
                  ${m.grade.startsWith('A') ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                    'border-red-500/30 text-red-400 bg-red-500/10'}
                `}>
                  {m.grade}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <footer className="mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-gray-600 text-xs">© 2026 Waterbuss. Open Source Project.</p>
      </footer>
    </div>
  );
}