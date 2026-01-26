"use client";

import { useEffect, useRef } from "react";

export function FluidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Particle system for fluid effect
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            hue: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 3 + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.hue = Math.random() * 60 + 180; // Blue-cyan range
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        const particles: Particle[] = [];
        const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.fillStyle = "rgba(2, 4, 10, 0.1)"; // Abyss color with low opacity for trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections between nearby particles
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            {/* Canvas particle system */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
                style={{ background: "#02040A" }}
            />

            {/* Additional CSS-based liquid layers */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Liquid blob 1 */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-liquid-flow"
                    style={{
                        background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
                        top: "20%",
                        left: "10%",
                    }}
                />

                {/* Liquid blob 2 */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-liquid-flow-delayed"
                    style={{
                        background: "radial-gradient(circle, #0077BE 0%, transparent 70%)",
                        top: "60%",
                        right: "15%",
                    }}
                />

                {/* Liquid blob 3 */}
                <div
                    className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
                        bottom: "10%",
                        left: "40%",
                        animation: "liquid-flow 30s ease-in-out infinite 10s",
                    }}
                />
            </div>
        </>
    );
}
