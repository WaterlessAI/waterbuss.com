"use client";

import { motion } from "framer-motion";
import { Code2, Key, ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function APIPage() {
    const [copied, setCopied] = useState(false);
    const [apiKeyCopied, setApiKeyCopied] = useState(false);

    const codeExample = `GET https://api.waterlessai.com/v1/status
{
  "timestamp": "2026-01-25T20:45:00Z",
  "global_water_consumed_liters": 50322183392,
  "rate_per_second": 3488,
  "stress_level": "HIGH"
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeExample);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleApiKeyCopy = () => {
        navigator.clipboard.writeText("wai_demo_key_xxxxxxxxxxxxx");
        setApiKeyCopied(true);
        setTimeout(() => setApiKeyCopied(false), 2000);
    };

    return (
        <main className="relative min-h-screen bg-abyss text-white overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-abyss via-abyss to-neon-cyan/5 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
                {/* Back Button */}
                <Link href="/">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-neon-cyan hover:text-ocean-blue transition-colors mb-12"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </motion.button>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <Code2
                            className="w-16 h-16 md:w-20 md:h-20 text-neon-cyan"
                            style={{
                                filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))",
                            }}
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold liquid-text mb-4">
                        API Documentation
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Access real-time water consumption data for AI infrastructure
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Endpoints */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Endpoint Example */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-2xl p-6 md:p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Get Status
                                </h2>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan text-sm hover:bg-neon-cyan/20 transition-all"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Code Block */}
                            <div className="relative">
                                <pre className="bg-black/60 rounded-xl p-6 overflow-x-auto border border-white/10">
                                    <code className="text-sm md:text-base font-mono text-gray-300">
                                        <span className="text-green-400">GET</span>{" "}
                                        <span className="text-neon-cyan">
                                            https://api.waterlessai.com/v1/status
                                        </span>
                                        {"\n\n"}
                                        <span className="text-gray-500">{"{"}</span>
                                        {"\n  "}
                                        <span className="text-purple-400">"timestamp"</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-yellow-300">"2026-01-25T20:45:00Z"</span>
                                        <span className="text-gray-500">,</span>
                                        {"\n  "}
                                        <span className="text-purple-400">
                                            "global_water_consumed_liters"
                                        </span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-blue-400">50322183392</span>
                                        <span className="text-gray-500">,</span>
                                        {"\n  "}
                                        <span className="text-purple-400">"rate_per_second"</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-blue-400">3488</span>
                                        <span className="text-gray-500">,</span>
                                        {"\n  "}
                                        <span className="text-purple-400">"stress_level"</span>
                                        <span className="text-gray-500">:</span>{" "}
                                        <span className="text-yellow-300">"HIGH"</span>
                                        {"\n"}
                                        <span className="text-gray-500">{"}"}</span>
                                    </code>
                                </pre>
                            </div>

                            {/* Description */}
                            <div className="mt-6 space-y-3">
                                <h3 className="text-lg font-semibold text-neon-cyan">
                                    Response Fields
                                </h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>
                                        <code className="text-purple-400">timestamp</code> - ISO 8601
                                        format
                                    </li>
                                    <li>
                                        <code className="text-purple-400">
                                            global_water_consumed_liters
                                        </code>{" "}
                                        - Total since Jan 1, 2026
                                    </li>
                                    <li>
                                        <code className="text-purple-400">rate_per_second</code> -
                                        Current consumption rate
                                    </li>
                                    <li>
                                        <code className="text-purple-400">stress_level</code> - LOW,
                                        MEDIUM, HIGH, CRITICAL
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Get API Key */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass rounded-2xl p-6 sticky top-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Key className="w-8 h-8 text-neon-cyan" />
                                <h3 className="text-xl font-bold">Get API Key</h3>
                            </div>

                            <p className="text-sm text-gray-400 mb-6">
                                Access real-time water consumption data with your API key. Free tier
                                includes 1,000 requests/month.
                            </p>

                            {/* Demo Key */}
                            <div className="bg-black/40 rounded-lg p-4 mb-6 border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                                        Demo Key
                                    </span>
                                    <button
                                        onClick={handleApiKeyCopy}
                                        className="text-neon-cyan hover:text-ocean-blue transition-colors"
                                    >
                                        {apiKeyCopied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                <code className="text-sm font-mono text-neon-cyan break-all">
                                    wai_demo_key_xxxxxxxxxxxxx
                                </code>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full px-6 py-4 bg-neon-cyan text-abyss font-bold rounded-xl hover:bg-neon-cyan/90 transition-all mb-4">
                                Request Production Key
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                Production API coming Q2 2026
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 glass rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Why Use WaterlessAI API?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-neon-cyan mb-2">
                                Real-Time
                            </div>
                            <p className="text-gray-400 text-sm">
                                Updated every 100ms with global consumption data
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-ocean-blue mb-2">
                                Accurate
                            </div>
                            <p className="text-gray-400 text-sm">
                                Based on WUE metrics from major data centers
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-alert mb-2">Free</div>
                            <p className="text-gray-400 text-sm">
                                1,000 requests/month at no cost
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
