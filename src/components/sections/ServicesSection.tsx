"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TrendingUp, Cpu, Layers, Activity, ShieldAlert, Sparkles } from "lucide-react";
import { bentoServices } from "@/data/axioradata";
import GlowCard from "@/components/ui/GlowCard";

const iconMap = {
  TrendingUp: TrendingUp,
  Cpu: Cpu,
  Layers: Layers,
  Activity: Activity,
  ShieldAlert: ShieldAlert,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="terminal" className="relative w-full max-w-7xl mx-auto px-6 py-10 md:py-12 overflow-hidden">
      {/* Subtle White/Gray Background Spotlights */}
      <div 
        className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none opacity-[0.02]"
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none opacity-[0.02]"
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col space-y-3 mb-8 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          <span>Platform Features</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-space-grotesk">
          Our Upcoming App Project
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light font-sans">
          Track wallet movements, execute trades securely, and receive automatic AI signals instantly with our professional suite.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4"
      >
        {bentoServices.map((service, index) => {
          const Icon = iconMap[service.iconName];
          
          const isLarge = index === 0;
          const isMedium = index === 1;
          
          let gridSpanClass = "md:col-span-4 h-[200px]"; 
          if (isLarge) {
            gridSpanClass = "md:col-span-8 h-[220px]"; 
          } else if (isMedium) {
            gridSpanClass = "md:col-span-4 h-[220px]"; 
          }

          return (
            <GlowCard
              key={service.id}
              variants={cardVariants}
              glowColor="default"
              enableFloat={true}
              className={`${gridSpanClass} flex flex-col justify-between bg-neutral-950/40 border-neutral-900`}
            >
              <div className="flex flex-col space-y-2">
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl border bg-neutral-900 text-neutral-200 border-neutral-800">
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 font-space-grotesk">
                    {service.badge}
                  </span>
                </div>

                {/* Typography */}
                <div className="space-y-1 text-left">
                  <h3 className="text-lg font-bold text-white tracking-wide font-space-grotesk">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-snug font-sans font-light line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Graphic Detail */}
              <div className="w-full flex items-center justify-between border-t border-neutral-900/60 pt-2 mt-auto">
                <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider font-space-grotesk">
                  System Active
                </span>
                <div className="flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                </div>
              </div>
            </GlowCard>
          );
        })}
      </motion.div>
    </section>
  );
}
