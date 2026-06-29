"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { metricsAchievements } from "@/data/axioradata";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlowCard from "@/components/ui/GlowCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
};

// Offset configurations to create an unanchored floating visual aesthetic
const offsetClasses = [
  "md:-translate-y-4 md:translate-x-2",
  "md:translate-y-8 md:-translate-x-1",
  "md:-translate-y-6 md:translate-x-4",
  "md:translate-y-4 md:-translate-x-3",
  "md:-translate-y-2 md:translate-x-1",
];

export default function AchievementsSection() {
  return (
    <section id="features" className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background spotlights (Monochrome white at extremely low opacity) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-[0.02]"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, transparent 80%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col space-y-4 mb-20 text-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" aria-hidden="true" />
          <span>Real-Time Performance</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk max-w-2xl">
          Proven Results You Can Trust
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-lg font-light font-sans">
          From individual traders to larger firms, we help traders achieve consistent results in record time.
        </p>
      </div>

      {/* Offset Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 pt-10"
      >
        {metricsAchievements.map((metric, index) => {
          const offsetClass = offsetClasses[index % offsetClasses.length];
          return (
            <GlowCard
              key={metric.id}
              variants={cardVariants}
              glowColor="default"
              enableFloat={true}
              className={`${offsetClass} flex flex-col justify-between p-6 h-[260px] bg-neutral-950/40 border-neutral-900 shadow-2xl`}
            >
              {/* Top Row: Verified Indicator (Monochrome) */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-neutral-300 font-semibold tracking-widest uppercase font-space-grotesk w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Verified
                </div>
                
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-space-grotesk">
                  {metric.label}
                </span>
              </div>

              {/* Middle Row: Numeric Counter */}
              <div className="my-auto text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-space-grotesk">
                  <AnimatedCounter
                    value={metric.value}
                    decimals={metric.decimals}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={2.5}
                  />
                </div>
              </div>

              {/* Bottom Row: Description */}
              <div className="border-t border-neutral-900/60 pt-3">
                <p className="text-[11px] text-neutral-400 leading-normal font-sans font-light">
                  {metric.description}
                </p>
              </div>
            </GlowCard>
          );
        })}
      </motion.div>
    </section>
  );
}
