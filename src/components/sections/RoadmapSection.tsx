"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Sparkles, CheckCircle2, Zap, Circle } from "lucide-react";
import { roadmapMilestones } from "@/data/axioradata";
import { cn } from "@/lib/utils";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const floatDelays = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.9];
const floatDurations = [5.8, 6.4, 5.2, 7.0, 6.0, 5.6, 6.8];

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 overflow-hidden"
    >
      {/* Ambient background glow (Monochrome) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-[0.015]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          <span>Axiora Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk max-w-2xl">
          Timeline of{" "}
          <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
            Development
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-lg font-light font-sans">
          Key development phases mapping the rollout of the Axiora platform.
        </p>
      </div>

      {/* Timeline Layout */}
      <div ref={lineRef} className="relative">

        {/* DESKTOP: center absolute track */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] hidden md:block pointer-events-none z-0"
        >
          <div className="absolute inset-0 bg-neutral-900 rounded-full" />
          <motion.div
            style={{ scaleY: lineScaleY, originY: "top" }}
            className="absolute inset-x-0 top-0 h-full rounded-full"
            aria-hidden="true"
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 80%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* MOBILE: left-margin track */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-5 w-[2px] block md:hidden pointer-events-none z-0"
        >
          <div className="absolute inset-0 bg-neutral-900 rounded-full" />
          <motion.div
            style={{ scaleY: lineScaleY, originY: "top" }}
            className="absolute inset-x-0 top-0 h-full rounded-full"
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 80%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Milestones */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 flex flex-col list-none m-0 p-0"
          aria-label="Project roadmap milestones"
        >
          {roadmapMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = milestone.status === "completed";
            const isActive = milestone.status === "active";
            const floatDelay = floatDelays[index] ?? 0;
            const floatDuration = floatDurations[index] ?? 6;

            return (
              <motion.li
                key={milestone.id}
                variants={cardVariants}
                className={cn(
                  "relative md:grid md:grid-cols-[1fr_64px_1fr] md:items-center",
                  "mb-8 md:mb-0 md:py-6",
                  "pl-16 md:pl-0"
                )}
              >
                {/* LEFT SLOT (desktop) */}
                <div className="hidden md:flex md:justify-end md:pr-8">
                  {isLeft && (
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: floatDuration,
                        delay: floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full max-w-[340px]"
                    >
                      <MilestoneCard milestone={milestone} isActive={isActive} isCompleted={isCompleted} />
                    </motion.div>
                  )}
                </div>

                {/* CENTER NODE (desktop) */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <NodeIndicator isCompleted={isCompleted} isActive={isActive} />
                </div>

                {/* RIGHT SLOT (desktop) */}
                <div className="hidden md:flex md:justify-start md:pl-8">
                  {!isLeft && (
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: floatDuration,
                        delay: floatDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full max-w-[340px]"
                    >
                      <MilestoneCard milestone={milestone} isActive={isActive} isCompleted={isCompleted} />
                    </motion.div>
                  )}
                </div>

                {/* MOBILE: Node + Card side-by-side */}
                <div className="flex items-start gap-4 md:hidden">
                  <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10">
                    <NodeIndicator isCompleted={isCompleted} isActive={isActive} />
                  </div>

                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: floatDuration,
                      delay: floatDelay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full"
                  >
                    <MilestoneCard milestone={milestone} isActive={isActive} isCompleted={isCompleted} />
                  </motion.div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}

function NodeIndicator({ isCompleted, isActive }: { isCompleted: boolean; isActive: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg transition-all",
        isCompleted
          ? "bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          : isActive
            ? "bg-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            : "bg-neutral-950 border-neutral-900"
      )}
    >
      {isCompleted
        ? <CheckCircle2 className="w-4 h-4 text-black" />
        : isActive
          ? <Zap className="w-4 h-4 text-white animate-pulse" />
          : <Circle className="w-3 h-3 text-neutral-800" />
      }
    </div>
  );
}

interface MilestoneCardProps {
  milestone: (typeof roadmapMilestones)[number];
  isActive: boolean;
  isCompleted: boolean;
}

function MilestoneCard({ milestone, isActive, isCompleted }: MilestoneCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 bg-neutral-950/60",
        isCompleted
          ? "border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.03)]"
          : isActive
            ? "border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.05)]"
            : "border-neutral-900 hover:border-neutral-800"
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={cn(
            "inline-flex text-[9px] font-black tracking-[0.22em] uppercase font-space-grotesk px-2.5 py-1 rounded-full border",
            isCompleted
              ? "text-white border-white/25 bg-white/5"
              : isActive
                ? "text-neutral-200 border-white/10 bg-white/5"
                : "text-neutral-500 border-neutral-900 bg-transparent"
          )}
        >
          {milestone.phase}
        </span>
        <time
          dateTime={milestone.date}
          className="text-[10px] text-neutral-600 font-sans"
        >
          {milestone.date}
        </time>
      </div>

      <h3 className="text-sm font-bold text-white font-space-grotesk mb-2 leading-snug text-left">
        {milestone.title}
      </h3>

      <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed text-left">
        {milestone.description}
      </p>

      {isActive && (
        <div className="flex items-center gap-2 mt-4 text-[10px] text-white font-black uppercase tracking-[0.2em] font-space-grotesk">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          In Progress
        </div>
      )}

      {isCompleted && (
        <div className="mt-4 h-[1px] bg-gradient-to-r from-white/20 to-transparent rounded-full" aria-hidden="true" />
      )}
    </article>
  );
}
