"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Code2, LineChart, Shield } from "lucide-react";

const pillars = [
  { icon: Code2, label: "Reliable Signals", description: "Trusted, high-probability signals designed for confident execution." },
  { icon: LineChart, label: "Latest Signals", description: "Real-time live data delivery so you never miss a market move." },
  { icon: Shield, label: "Least Risk", description: "Optimized risk management strategies to protect your capital." },
];

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 175 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 175 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glowX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Ambient glow (Subtle white) */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-[0.015] animate-float-delayed"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left Column — Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk leading-tight">
              Built by a trader,{" "}
              <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
                for traders.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed max-w-2xl text-left">
            <p>
              Axiora was founded in 2025 by{" "}
              <span className="text-white font-medium">Afnan Ahmed</span>, an experienced Data Analyst and Data Engineer. Axiora delivers research-driven market analysis with a focus on high-accuracy data. The expert team provides premium trading signals utilized by both professional traders and absolute beginners to effectively test the market. Backed by highly satisfying results and consistent performance, Axiora has established itself as a premier, trusted ecosystem built to give you the ultimate edge.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.label} className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-900 bg-neutral-950/40">
                  <div className="p-2 rounded-lg bg-white/5 text-white border border-white/10 w-fit">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-space-grotesk">
                    {pillar.label}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-sans leading-relaxed">
                    {pillar.description}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column — Interactive Est. 2025 Card (B&W Minimalist) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative w-full max-w-sm rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden cursor-default"
          >
            {/* Mouse spotlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 300px at ${glowX} ${glowY}, rgba(255,255,255,0.03), transparent 80%)`,
              }}
              aria-hidden="true"
            />

            {/* Top accent bar */}
            <div className="flex items-center gap-3 mb-8" style={{ transform: "translateZ(20px)" }} aria-hidden="true">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
              <span className="text-[10px] text-neutral-400 font-bold tracking-[0.35em] uppercase font-space-grotesk">
                Est. 2025
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
            </div>

            {/* Axiora Monogram */}
            <div className="flex flex-col items-center text-center gap-6 mb-8" style={{ transform: "translateZ(30px)" }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-600 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center">
                <span className="text-4xl font-black text-white tracking-tighter">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-widest uppercase font-space-grotesk">
                  Axiora
                </h3>
                <p className="text-xs text-neutral-500 tracking-widest mt-1.5 font-sans">
                  Crypto Signals Platform
                </p>
              </div>
            </div>

            {/* Stats Mini Grid */}
            <div className="grid grid-cols-2 gap-3" style={{ transform: "translateZ(20px)" }}>
              {[
                { label: "Trades Executed", value: "468+" },
                { label: "Win Rate", value: "94.7%" },
                { label: "Winning Trades", value: "443+" },
                { label: "Avg ROI per Trade", value: "137%+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-neutral-950/60 border border-neutral-900 p-3 text-center">
                  <div className="text-base font-bold text-white font-space-grotesk">{stat.value}</div>
                  <div className="text-[10px] text-neutral-600 font-sans mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Left accent bar */}
            <div className="absolute top-1/3 -left-px w-[2px] h-20 bg-neutral-700 rounded-full blur-[1px] opacity-60" aria-hidden="true" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
