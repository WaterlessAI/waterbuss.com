"use client";
import { useState } from "react";
import { models } from "@/lib/ai-models";
import { Calculator } from "lucide-react";

export default function ImpactCalculator() {
    const [prompts, setPrompts] = useState(1000);
    const [selectedModelId, setSelectedModelId] = useState(models[0].id);

    const selectedModel = models.find(m => m.id === selectedModelId) || models[0];
    const annualWater = (prompts * 365 * selectedModel.water_usage_ml) / 1000;

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">My Impact</h3>
            </div>

            <div className="space-y-6 flex-1">
                <div>
                    <label className="text-xs text-gray-500 font-mono uppercase">Daily Prompts</label>
                    <div className="text-2xl font-bold text-white mb-2">{prompts}</div>
                    <input
                        type="range" min="10" max="5000" step="10"
                        value={prompts} onChange={(e) => setPrompts(Number(e.target.value))}
                        className="w-full accent-cyan-500 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div>
                    <label className="text-xs text-gray-500 font-mono uppercase mb-2 block">Model</label>
                    <select
                        value={selectedModelId}
                        onChange={(e) => setSelectedModelId(e.target.value)}
                        className="bg-[#1A1A1A] border-none text-sm"
                    >
                        {models.map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-auto pt-6 border-t border-[#1F1F1F]">
                <div className="text-xs text-cyan-500 font-mono mb-1">Annual Footprint</div>
                <div className="text-4xl font-bold text-white tracking-tighter">
                    {annualWater.toFixed(1)}<span className="text-lg text-gray-600">L</span>
                </div>
            </div>
        </div>
    );
}
