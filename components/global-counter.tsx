"use client";

import { useEffect, useState } from "react";
import { Droplets } from "lucide-react";

export default function GlobalCounter() {
    const [count, setCount] = useState(50322183392); // Start from a realistic huge number

    useEffect(() => {
        // Increment by ~3500 liters per second (approx 350 per 100ms)
        const interval = setInterval(() => {
            setCount((prev) => prev + 350);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-20 relative z-10">
            <div className="flex items-center gap-4 mb-4 opacity-80">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                <span className="text-cyan-400 tracking-widest text-sm font-semibold uppercase">Live Global Consumption</span>
            </div>

            {/* THE MASSIVE COUNTER */}
            <div className="relative group">
                <h1
                    className="neon-text transition-all duration-300"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '60px',
                        lineHeight: '1',
                        fontWeight: '700'
                    }}
                >
                    {count.toLocaleString()}
                </h1>
                <span
                    className="absolute -right-8 top-0 animate-pulse"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '2rem',
                        color: '#0077BE'
                    }}
                >
                    L
                </span>
            </div>

            <div className="mt-6 flex items-center gap-3 text-cyan-200/60">
                <Droplets className="w-6 h-6 animate-bounce" />
                <p className="text-xl md:text-2xl font-light tracking-wide">
                    <span className="text-white font-bold">+3,500 L</span> consumed every second
                </p>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          h1 {
            font-size: 100px !important;
          }
        }
        @media (min-width: 1024px) {
          h1 {
            font-size: 130px !important;
          }
        }
      `}</style>
        </div>
    );
}
