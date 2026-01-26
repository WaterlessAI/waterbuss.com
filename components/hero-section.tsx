"use client";

import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center px-4 pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center max-w-5xl mx-auto"
            >
                {/* Main Headline - "AI is Thirsty" */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 liquid-text"
                >
                    AI is Thirsty.
                </motion.h1>

                {/* Glitch overlay effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold liquid-text opacity-30 blur-sm">
                        AI is Thirsty.
                    </h1>
                </motion.div>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                    Visualizing the invisible water footprint of global data centers in
                    real-time.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-8 h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                />

                {/* Subtitle/Mission */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-6 text-sm md:text-base text-ocean-blue/80 italic"
                >
                    Every query, every model, every inference — requires water to cool the
                    machines that power our AI future.
                </motion.p>
            </motion.div>

            {/* Floating particles decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [0, -100],
                            x: Math.random() * 100 - 50,
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-neon-cyan rounded-full blur-sm"
                        style={{
                            left: `${20 + i * 15}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
