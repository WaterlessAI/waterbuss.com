"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsLoading(false);
        setEmail("");

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="relative z-10 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass glow-ocean rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/10 via-transparent to-neon-cyan/10 pointer-events-none" />

                    {/* Content */}
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6"
                        >
                            <Sparkles className="w-8 h-8 text-neon-cyan" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join the Movement
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get early access to our API and be part of the solution. Receive
                            exclusive insights, real-time data, and sustainability metrics.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="glass rounded-2xl p-2 flex items-center gap-2">
                                <div className="flex items-center gap-2 flex-1 px-4">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        disabled={isLoading || isSubmitted}
                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm md:text-base"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading || isSubmitted}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base flex items-center gap-2 transition-all duration-300 ${isSubmitted
                                            ? "bg-green-500 text-white"
                                            : "bg-neon-cyan text-abyss hover:bg-neon-cyan/90"
                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-abyss/30 border-t-abyss rounded-full animate-spin" />
                                            <span>Joining...</span>
                                        </>
                                    ) : isSubmitted ? (
                                        <>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>Joined!</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Join Waitlist</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>
                            </div>

                            <p className="text-xs text-gray-500 mt-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {[
                                {
                                    title: "API Access",
                                    desc: "Real-time water usage data",
                                },
                                {
                                    title: "Insights",
                                    desc: "Weekly sustainability reports",
                                },
                                {
                                    title: "Impact",
                                    desc: "Track global improvements",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-neon-cyan font-semibold mb-1">
                                        {feature.title}
                                    </div>
                                    <div className="text-sm text-gray-400">{feature.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
