"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/axioradata";
import { cn } from "@/lib/utils";

const splitIntoColumns = (items: typeof testimonials, mdCols: number) => {
  const cols: typeof testimonials[] = Array.from({ length: mdCols }, () => []);
  items.forEach((item, i) => cols[i % mdCols].push(item));
  return cols;
};

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="testimonials" className="relative w-full max-w-[1400px] mx-auto px-6 py-32 overflow-hidden">
      {/* Background glow (Monochrome) */}
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.015] animate-gravity-drift"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          <span>Client Reviews</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk max-w-2xl">
          What People Say{" "}
          <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
            About Us
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light font-sans">
          See how traders are using Axiora signals to improve their trading performance daily.
        </p>
      </div>

      {isMobile ? (
        <MobileSwipeCarousel items={testimonials} />
      ) : (
        <DesktopMasonryGrid items={testimonials} />
      )}
    </section>
  );
}

function DesktopMasonryGrid({ items }: { items: typeof testimonials }) {
  const columns = splitIntoColumns(items, 3);
  
  return (
    <div className="hidden lg:grid grid-cols-3 gap-6 relative z-10">
      {columns.map((col, colIdx) => (
        <div
          key={`col-${colIdx}`}
          className={cn(
            "flex flex-col gap-6",
            colIdx === 0 ? "mt-0" : colIdx === 1 ? "mt-12" : "mt-6"
          )}
        >
          {col.map((item, itemIdx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: itemIdx * 0.1 + colIdx * 0.15 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MobileSwipeCarousel({ items }: { items: typeof testimonials }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full overflow-hidden lg:hidden relative z-10 py-4" ref={carouselRef} aria-label="Client testimonials — swipe to scroll">
      <motion.div
        drag="x"
        dragConstraints={carouselRef}
        className="flex gap-4 px-4 w-max cursor-grab active:cursor-grabbing"
      >
        {items.map((item) => (
          <div key={item.id} className="w-[300px] sm:w-[360px] flex-shrink-0">
            <TestimonialCard item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  const colors = ["#E5E5E5", "#D4AF37", "#999999", "#888888", "#cccccc"];
  const initialColor = colors[item.id.charCodeAt(0) % colors.length] ?? "#ffffff";

  return (
    <div className="relative p-6 rounded-2xl bg-neutral-950/60 border border-neutral-900 backdrop-blur-sm group hover:border-white/20 transition-all duration-500 overflow-hidden text-left">
      
      {/* Subtle hover white glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-white/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-neutral-800 group-hover:text-white/10 transition-colors duration-300">
        <Quote className="w-8 h-8 fill-current opacity-35" />
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        
        {/* Header Profile */}
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm tracking-widest font-space-grotesk shadow-inner"
            style={{ 
              background: `linear-gradient(135deg, ${initialColor}20, transparent)`, 
              border: `1px solid ${initialColor}40` 
            }}
          >
            {item.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium text-sm font-space-grotesk">{item.name}</span>
            <span className="text-neutral-500 text-[11px] font-sans">
              {item.role} @ <span className="text-neutral-400">{item.company}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-neutral-300 text-sm font-light font-sans leading-relaxed">
          "{item.content}"
        </p>

        {/* Footer Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
          ))}
          <span className="text-[10px] text-neutral-600 font-space-grotesk ml-2 font-bold tracking-widest uppercase">
            Verified Client
          </span>
        </div>
      </div>
    </div>
  );
}
