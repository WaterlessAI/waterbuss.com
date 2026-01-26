import { Droplets, AlertTriangle } from "lucide-react";
import { models } from "@/lib/ai-models";

export default function LeaderboardTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {models.map((m) => (
                <div
                    key={m.id}
                    className={`relative flex flex-col p-6 rounded-xl border ${m.grade.startsWith('A') ? 'border-cyan-500/50 bg-cyan-900/5' : 'border-[#1F1F25] bg-[#0E0E11]'} hover:border-cyan-400 transition-all`}
                >
                    {m.grade.startsWith('A') && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full text-center whitespace-nowrap">
                            Eco Choice
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white">{m.name}</h3>
                        <p className="text-xs text-gray-500 uppercase font-mono mt-1">{m.provider}</p>
                    </div>

                    <div className="mb-6">
                        <div className="text-3xl font-mono font-bold text-white">
                            {m.water_usage_ml}<span className="text-sm text-gray-500 ml-1">ml</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">per query</div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Droplets className="w-4 h-4 text-cyan-500" />
                            <span>Water Grade: <strong className={m.grade.startsWith('A') ? "text-green-400" : "text-yellow-500"}>{m.grade}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Zap className="w-4 h-4 text-cyan-500" />
                            <span>Efficiency: {m.energy_score}/100</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <div className={`w-2 h-2 rounded-full ${m.type === 'Open Source' ? 'bg-green-500' : 'bg-purple-500'}`} />
                            </div>
                            <span>{m.type}</span>
                        </div>
                    </div>

                    <button className={`w-full py-2 rounded-md font-medium text-sm border transition-colors ${m.grade.startsWith('A') ? 'bg-cyan-500 text-black border-cyan-500 hover:bg-cyan-400' : 'bg-transparent border-[#333] hover:border-white text-white'}`}>
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
}

function Zap({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
}
