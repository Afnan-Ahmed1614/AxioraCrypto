"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Check, Activity, TrendingUp } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function HeroSection() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden border-b border-neutral-900 bg-[#000000]"
      aria-labelledby="hero-heading"
    >
      {/* Subtle white ambient background blurs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.015] z-0 animate-pulse"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-[0.02] z-0 animate-float"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />



      {/* Main Grid: Asymmetrical Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10">
        
        {/* LEFT COLUMN: Elite Asymmetric Header & Signals Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-between space-y-12"
        >
          {/* Header Block */}
          <div className="space-y-6 text-left">
            <motion.div variants={itemVariants} className="w-fit">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-white" aria-hidden="true" />
                Welcome to Axiora Crypto Signals.
              </span>
            </motion.div>

            <motion.h1 
              id="hero-heading"
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.95] font-space-grotesk"
            >
              We Analyze.<br />
              <span className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-white bg-clip-text text-transparent text-glow-white">
                You Trade.
              </span>
            </motion.h1>
          </div>

          {/* Elegant Horizontal Divider Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-[1px] bg-gradient-to-r from-neutral-800 via-neutral-900 to-transparent" 
            aria-hidden="true"
          />

          {/* Subheading & CTA Panel in a High-Density Dark-Glass Container */}
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl bg-neutral-950/40 border border-neutral-900 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-3 text-left max-w-md">
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed font-sans">
                Receive carefully researched crypto trading signals and market insights without spending hours analyzing charts yourself.
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1.5" aria-label="Key highlights">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-space-grotesk">
                  <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  94.7% Signal Accuracy
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-space-grotesk">
                  <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  Instant Telegram Alerts
                </span>
              </div>
            </div>

            {/* Premium Pill-Shape Action Button */}
            <a 
              href="#contact"
              aria-label="Get Signals"
              className="group relative flex-shrink-0 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 border border-white"
            >
              Get Signals
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Floating Monochrome Signal Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Asymmetric border divider behind the card */}
          <div className="absolute inset-0 border border-neutral-900/60 rounded-3xl pointer-events-none -translate-x-3 translate-y-3 z-0" aria-hidden="true" />
          
          <GlowCard 
            glowColor="default"
            className="w-full max-w-[420px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)] border-neutral-900 bg-neutral-950/60 relative z-10"
          >
            {/* Header decoration */}
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
                <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] font-space-grotesk">
                  AXIORA TERMINAL // SIGNAL LOGS
                </span>
              </div>
              <div className="flex gap-1" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Simulated Live Analytics Data */}
            <div className="space-y-4 font-sans text-left">
              
              {/* BTC Trade Row */}
              <div className="flex justify-between items-center bg-black/60 p-4 rounded-xl border border-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest font-space-grotesk font-bold">BTC / USD Alert</div>
                    <div className="text-sm font-bold text-white font-space-grotesk">
                      Buy Target: $92,450
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase text-white tracking-widest font-space-grotesk">
                    Active
                  </span>
                </div>
              </div>

              {/* ETH Trade Row */}
              <div className="flex justify-between items-center bg-black/60 p-4 rounded-xl border border-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    <Activity className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-500 uppercase tracking-widest font-space-grotesk font-bold">ETH / USD Alert</div>
                    <div className="text-sm font-bold text-white font-space-grotesk">
                      Sell Target: $3,420
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[9px] font-bold uppercase text-neutral-500 tracking-widest font-space-grotesk">
                    Closed
                  </span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-black/60 p-4 rounded-xl border border-neutral-900 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-space-grotesk">Weekly Success Rate</span>
                  <span className="text-xs font-bold text-white font-space-grotesk">94.7%</span>
                </div>
                <div className="w-full bg-neutral-950 h-1 rounded-full overflow-hidden border border-neutral-900" aria-hidden="true">
                  <div className="bg-white h-full w-[94.7%] rounded-full" />
                </div>
              </div>

            </div>


          </GlowCard>
        </motion.div>

      </div>
    </section>
  );
}
