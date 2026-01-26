"use client";

import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ManifestoPage() {
    return (
        <main className="relative min-h-screen bg-abyss text-white overflow-hidden">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-abyss via-abyss to-ocean-blue/10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
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

                {/* Water Drop Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 1 }}
                    className="flex justify-center mb-12"
                >
                    <div className="relative">
                        <Droplet
                            className="w-24 h-24 md:w-32 md:h-32 text-neon-cyan"
                            style={{
                                filter: "drop-shadow(0 0 30px rgba(0, 240, 255, 0.6))",
                            }}
                        />
                        <div className="absolute inset-0 animate-ping opacity-20">
                            <Droplet className="w-24 h-24 md:w-32 md:h-32 text-neon-cyan" />
                        </div>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-center mb-8 liquid-text"
                >
                    The Cloud is Not Weightless.
                </motion.h1>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent mb-12"
                />

                {/* Body Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass rounded-3xl p-8 md:p-12"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                        We often think of AI as ethereal code living in the cloud. But the physical reality is grounded in metal, silicon, and water.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                        Massive data centers consume billions of liters of water for cooling. Every query, every model training session, every inference draws from our planet's finite reserves.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                        <span className="text-neon-cyan font-semibold">WaterlessAI exists to visualize this invisible cost.</span> We are not against progress; we are for transparency. We believe intelligence shouldn't come at the cost of our planet's most precious resource.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        The future of AI must be sustainable. It starts with awareness. It starts with seeing the true cost of every click, every prompt, every innovation.
                    </p>

                    {/* Signature */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-neon-cyan font-semibold">
                            — The WaterlessAI Team
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Building transparency, one drop at a time.
                        </p>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <Link href="/">
                        <button className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-xl font-semibold hover:bg-neon-cyan/20 transition-all">
                            View Real-Time Data
                        </button>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
