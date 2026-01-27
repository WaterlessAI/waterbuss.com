"use client";
import React, { useState, useEffect } from "react";

// --- IKONLAR (SVG) ---
const IconWater = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const IconServer = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
const IconCloud = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>;
const IconHeat = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22h5.61a2 2 0 0 0 1.91-2.54L13 13"></path></svg>;

// --- VERI ---
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
    <div className="min-h-screen font-sans text-white pb-20">

      {/* --- SECTION 1: DASHBOARD (Mevcut Kısım) --- */}
      <section className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center mb-8 px-2 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-900/30 rounded flex items-center justify-center border border-cyan-500/30">
              <IconWater />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">WATERBUSS</h1>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {/* Main Counter */}
          <div className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">Live Global Consumption</h2>
            <div className="text-5xl md:text-7xl font-bold font-mono text-white glow-text tracking-tighter transition-all">
              {count.toLocaleString()}
            </div>
            <div className="text-cyan-400 text-sm mt-4 font-mono">
              +3,500 L / second
            </div>
            <p className="text-gray-400 text-sm mt-8 max-w-md leading-relaxed">
              Every query has a physical cost. Visualizing the invisible water footprint of global compute infrastructure.
            </p>
          </div>

          {/* Calculator */}
          <div className="md:col-span-1 md:row-span-2 bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
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
            </div>
          </div>

          {/* Leaderboard */}
          <div className="md:col-span-1 md:row-span-2 glass rounded-2xl p-0 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-white font-bold text-sm">Efficiency Index</h3>
              <IconZap />
            </div>
            <div className="flex-1 overflow-y-auto max-h-[400px]">
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

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* --- SECTION 2: THE PHYSICS OF THIRST (Yeni Bölüm) --- */}
      <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Why Do AI Models Drink Water?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              It's not magic, it's thermodynamics. Generating text requires massive energy, which creates massive heat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconServer />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Compute Heat</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                GPUs run at 100% capacity to process billions of parameters for your prompt. This friction generates extreme temperatures, similar to a car engine revving.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconHeat />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Evaporative Cooling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To prevent melting, Data Centers use water-based cooling towers. Water is evaporated to remove heat from the air, consuming clean water in the process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconCloud />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Power Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The electricity powering the servers also consumes water at the source (hydroelectric, nuclear, or coal steam turbines), adding to the hidden footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: COMPARISON (Yeni Bölüm) --- */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Perspective</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is 50 Queries?</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Writing a long essay or coding session with GPT-4 (approx. 50 turns) consumes roughly the same amount of water as a standard 16oz (500ml) water bottle.
              </p>
              <div className="flex gap-4 text-sm font-mono text-gray-500">
                <div>50 Prompts</div>
                <div>=</div>
                <div className="text-white">500ml Water</div>
              </div>
            </div>

            <div className="relative h-64 bg-black/50 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Basit Görselleştirme */}
              <div className="text-center">
                <div className="text-6xl mb-2">🧴</div>
                <div className="text-xs text-gray-500 uppercase">1 Plastic Bottle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 text-center border-t border-white/5 pt-12 pb-8">
        <h3 className="text-white font-bold text-lg mb-2">WATERBUSS</h3>
        <p className="text-gray-600 text-sm mb-6">Building the sustainable future of AI.</p>
        <div className="text-xs text-gray-700 font-mono">
          © 2026 Waterbuss. Open Source Project.
        </div>
      </footer>

    </div>
  );
}
