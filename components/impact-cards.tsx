import { Droplet, Cloud, Globe, ArrowRight } from "lucide-react";

const cards = [
    {
        title: "Per Query Cost",
        value: "~500ml",
        desc: "Fresh water consumed for every 20-50 queries (approx).",
        icon: Droplet,
        gradient: "from-blue-500/20 to-cyan-500/5"
    },
    {
        title: "Cooling Method",
        value: "Evaporative",
        desc: "Data centers use cooling towers that evaporate water to dissipate heat.",
        icon: Cloud,
        gradient: "from-purple-500/20 to-blue-500/5"
    },
    {
        title: "Critical Regions",
        value: "High Stress",
        desc: "Major clusters in Arizona, Spain, and Singapore face water scarcity.",
        icon: Globe,
        gradient: "from-red-500/20 to-orange-500/5"
    }
];

export default function ImpactCards() {
    return (
        <section className="relative py-32 px-4 md:px-0">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                    Understanding the <span className="text-cyan-400">Hidden Cost</span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    {cards.map((card, idx) => (
                        <div key={idx} className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:-translate-y-2">
                            {/* Internal Gradient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Tech Corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/20 group-hover:border-cyan-400 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/20 group-hover:border-cyan-400 transition-colors" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-cyan-500/50">
                                    <card.icon className="w-8 h-8 text-cyan-300" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-mono">{card.title}</h3>
                                <div className="text-3xl font-bold text-cyan-400 mb-4 tracking-tighter neon-text-sm">{card.value}</div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
