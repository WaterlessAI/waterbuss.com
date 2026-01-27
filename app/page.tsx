"use client";
import React, { useState, useEffect, useRef } from "react";

// --- ICONS ---
const IconWater = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const IconServer = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
const IconCloud = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>;
const IconHeat = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22h5.61a2 2 0 0 0 1.91-2.54L13 13"></path></svg>;
const IconTwitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;

// --- DATA ---
const models = [
  { id: "mistral", name: "Mistral 7B", water: 4.5, grade: "A+" },
  { id: "claude", name: "Claude 3 Haiku", water: 8.2, grade: "A" },
  { id: "gpt4", name: "GPT-4 Turbo", water: 45.0, grade: "D" },
  { id: "gemini", name: "Gemini Ultra", water: 52.0, grade: "F" },
];

// --- 3D TILT COMPONENT ---
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 20;
    const rotateY = (x - centerX) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [count, setCount] = useState(50322281392);
  const [prompts, setPrompts] = useState(1000);
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [copied, setCopied] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 3500), 1000);
    return () => clearInterval(interval);
  }, []);

  const activeModel = models.find(m => m.id === selectedModel) || models[0];
  const footprint = (prompts * 365 * activeModel.water) / 1000;

  // Viral Share Logic
  const shareText = `I just found out my AI usage consumes ${footprint.toFixed(0)} Liters of water annually! 💧 Check your footprint at`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=https://waterbuss.com&hashtags=GreenAI,Waterbuss`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen font-sans text-white pb-20 overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- LIVE NEWS TICKER --- */}
      <div className="sticky top-0 z-[100] bg-[#0A0A0A] border-b border-white/5 py-2 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[10px] font-mono tracking-widest uppercase">
          <span className="text-cyan-400"><span className="text-red-500 mr-2">⚠️</span> LIVE: Global data center water consumption spikes by 12% during peak hours.</span>
          <span className="text-gray-400">📈 REPORT: Training a single large model evaporates 700,000 liters of clean water.</span>
          <span className="text-cyan-400">💧 UPDATE: New efficient cooling systems deployed in Nordic regions.</span>
          <span className="text-gray-400">📡 STATUS: Tracking 15,000+ active GPU clusters worldwide.</span>
          {/* Duplicate for infinite loop */}
          <span className="text-cyan-400"><span className="text-red-500 mr-2">⚠️</span> LIVE: Global data center water consumption spikes by 12% during peak hours.</span>
          <span className="text-gray-400">📈 REPORT: Training a single large model evaporates 700,000 liters of clean water.</span>
          <span className="text-cyan-400">💧 UPDATE: New efficient cooling systems deployed in Nordic regions.</span>
          <span className="text-gray-400">📡 STATUS: Tracking 15,000+ active GPU clusters worldwide.</span>
        </div>
      </div>

      {/* --- DASHBOARD SECTION --- */}
      <section className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center mb-8 px-2 border-b border-white/5 pb-4 mt-4">
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
          <div className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-center w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-gray-500 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4">Live Global Consumption</h2>
            <div className="text-3xl sm:text-4xl md:text-7xl font-bold font-mono text-white glow-text tracking-tighter transition-all break-all">
              {count.toLocaleString()}
            </div>
            <div className="text-cyan-400 text-sm mt-4 font-mono">
              +3,500 L / second
            </div>
            <p className="text-gray-400 text-sm mt-8 max-w-md leading-relaxed">
              Every query has a physical cost. Visualizing the invisible water footprint of global compute infrastructure.
            </p>
          </div>

          {/* VIRAL CALCULATOR */}
          <div className="md:col-span-1 md:row-span-2 bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-80"></div>

            <div>
              <div className="text-white font-bold mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  Impact Calculator
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-gray-500 hover:border-white/50 hover:text-white transition-colors"
                >
                  i
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-xs text-gray-500 font-mono uppercase block mb-2">Daily Prompts</label>
                  <input
                    type="range" min="100" max="10000" step="100"
                    value={prompts} onChange={(e) => setPrompts(Number(e.target.value))}
                    className="w-full accent-yellow-500 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-white font-mono mt-2">{prompts.toLocaleString()}</div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-mono uppercase block mb-2">Model</label>
                  <select
                    value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg p-3 text-sm text-white outline-none focus:border-yellow-500"
                  >
                    {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Your Annual Footprint</div>
              <div className="text-4xl font-bold text-white tracking-tighter mb-4">
                {footprint.toFixed(0)}<span className="text-lg text-gray-600">L</span>
              </div>

              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <IconTwitter /> Share My Impact
              </a>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="md:col-span-1 md:row-span-1 glass rounded-2xl p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-white font-bold text-sm">Efficiency Index</h3>
            </div>
            <div className="flex-1 overflow-y-auto">
              {models.map((m, i) => (
                <div key={m.id} className="flex items-center justify-between p-3 px-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                  <div>
                    <div className="text-sm font-medium text-white">{m.name}</div>
                    <div className="text-xs text-gray-500">{m.water}ml</div>
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded ${m.grade.startsWith('A') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{m.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DONATION WIDGET */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase">Support Us</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-3">Help keep the servers running.</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => copyToClipboard("0x68F86DCaf54262A49cc394d3053B7E107A3CFb20", "ETH")}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/5 rounded px-3 py-2 flex items-center justify-between text-xs text-gray-300 transition-all"
              >
                <span>ETH</span>
                <span className="text-[10px] opacity-50">{copied === "ETH" ? "COPIED!" : "COPY"}</span>
              </button>
              <button
                onClick={() => copyToClipboard("Do5HQqBbqeENamYEsUb3fTP3vQLnpGigdpHvYpDH8ADh", "SOL")}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/5 rounded px-3 py-2 flex items-center justify-between text-xs text-gray-300 transition-all"
              >
                <span>SOL</span>
                <span className="text-[10px] opacity-50">{copied === "SOL" ? "COPIED!" : "COPY"}</span>
              </button>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* --- SECTION 2: PHYSICS (3D Tilt Cards) --- */}
      <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Why Do AI Models Drink Water?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Generating text requires massive energy, which creates massive heat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TiltCard className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconServer />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Compute Heat</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                GPUs run at 100% capacity to process billions of parameters. This friction generates extreme temperatures, similar to a car engine revving.
              </p>
            </TiltCard>

            <TiltCard className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconHeat />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Evaporative Cooling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To prevent melting, Data Centers use water-based cooling towers. Water is evaporated to remove heat, consuming clean water in the process.
              </p>
            </TiltCard>

            <TiltCard className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:text-cyan-400 transition-colors">
                <IconCloud />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Power Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The electricity powering the servers also consumes water at the source (hydroelectric, nuclear, or coal steam turbines), adding hidden costs.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: COMPARISON --- */}
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
            </div>
            <div className="relative h-64 bg-black/50 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="text-center animate-pulse">
                <div className="text-6xl mb-2">🧴</div>
                <div className="text-xs text-gray-500 uppercase">1 Plastic Bottle</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION 4: GET THE BADGE (JOIN THE MOVEMENT) --- */}
      <section className="py-24 px-4 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Show Your Commitment to Green AI</h2>
          <p className="text-gray-400 mb-12">Add the live Waterbuss badge to your project. It's free and raises awareness.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            {/* Preview */}
            <div className="glass p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center border border-white/5">
              <span className="text-[10px] text-gray-500 uppercase font-mono mb-6">Badge Preview</span>
              <a
                href="https://waterbuss.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: '#000',
                  border: '1px solid #00F0FF',
                  borderRadius: '99px',
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <span style={{ color: '#00F0FF' }}>💧</span> Tracked by WATERBUSS
              </a>
            </div>

            {/* Code Widget */}
            <div className="space-y-4">
              <div className="bg-black/60 rounded-xl p-4 border border-white/10 relative group">
                <code className="text-[10px] font-mono text-gray-500 break-all leading-relaxed">
                  {`<a href="https://waterbuss.com" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#000;border:1px solid #00F0FF;border-radius:99px;color:#fff;text-decoration:none;font-family:sans-serif;font-size:12px;font-weight:bold;"><span style="color:#00F0FF">💧</span>Tracked by WATERBUSS</a>`}
                </code>
              </div>
              <button
                onClick={() => copyToClipboard(`<a href="https://waterbuss.com" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#000;border:1px solid #00F0FF;border-radius:99px;color:#fff;text-decoration:none;font-family:sans-serif;font-size:12px;font-weight:bold;"><span style="color:#00F0FF">💧</span>Tracked by WATERBUSS</a>`, "HTML")}
                className="flex items-center justify-center gap-2 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all active:scale-[0.98]"
              >
                {copied === "HTML" ? "✅ COPIED TO CLIPBOARD!" : "📋 COPY HTML SNIPPET"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 text-center border-t border-white/5 pt-12 pb-8">
        <h3 className="text-white font-bold text-lg mb-2">WATERBUSS</h3>
        <p className="text-gray-600 text-sm mb-6">Building the sustainable future of AI.</p>
        <div className="text-xs text-gray-700 font-mono flex justify-center gap-4">
          <span>© 2026 Waterbuss. Open Source Project.</span>
          <a href="https://github.com/WaterlessAI" target="_blank" className="hover:text-cyan-400 transition-colors">
            Created by WaterlessAI
          </a>
        </div>
      </footer>

      {/* --- METHODOLOGY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative glass w-full max-w-md p-6 md:p-8 rounded-3xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-cyan-500"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">How We Calculate</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>
                Estimates are based on the industry standard of <span className="text-white font-bold">500ml water consumption per 20-50 queries</span> (varying by model efficiency and cooling tech).
              </p>
              <p>
                Electricity usage includes Power Usage Effectiveness (PUE) of <span className="text-white font-bold">1.58</span>.
              </p>
              <div className="pt-4 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                Source: University of California, Riverside & Cornell University Research (2024).
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-xl transition-all"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
