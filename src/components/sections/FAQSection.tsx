"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { faqItems } from "@/data/axioradata";
import { cn } from "@/lib/utils";

const categories = Array.from(new Set(faqItems.map(item => item.category)));

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] ?? "General");

  const filteredItems = faqItems.filter(item => item.category === activeCategory);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative w-full max-w-4xl mx-auto px-6 py-32 overflow-hidden">
      {/* Background glow mapping (Monochrome) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] blur-[120px] pointer-events-none opacity-[0.015]"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit" aria-hidden="true">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Support Center</span>
        </div>
        <h2 id="faq-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk">
          Your Questions{" "}
          <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
            Answered
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light font-sans">
          Technical specifications, billing details, and operational methodology for the Axiora intelligence terminal.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 relative z-10"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const tabId = `faq-tab-${category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`;
          const panelId = `faq-panel-${category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`;
          return (
            <button
              key={category}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase font-space-grotesk transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-full border border-white/20 bg-white/5"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <motion.div
        layout
        role="tabpanel"
        aria-label={`${activeCategory} FAQ items`}
        className="flex flex-col gap-3 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <AccordionItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function AccordionItem({ item }: { item: typeof faqItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = `faq-trigger-${item.id}`;
  const contentId = `faq-content-${item.id}`;

  return (
    <motion.div
      layout
      className={cn(
        "overflow-hidden rounded-xl border backdrop-blur-sm transition-colors duration-300",
        isOpen
          ? "bg-neutral-950 border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.02)]"
          : "bg-neutral-950/60 border-neutral-900/80 hover:border-neutral-800"
      )}
    >
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      >
        <span className={cn(
          "text-sm md:text-base font-bold font-space-grotesk pr-4 transition-colors",
          isOpen ? "text-white" : "text-neutral-300"
        )}>
          {item.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-hidden="true"
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-colors",
            isOpen
              ? "border-white/30 bg-white/5 text-white"
              : "border-neutral-800 text-neutral-500"
          )}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={triggerId}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 md:px-6 pb-6 pt-0 text-sm md:text-[15px] font-sans font-light leading-relaxed text-neutral-400 border-t border-neutral-900/50 mt-2 text-left">
              <div className="pt-4">{item.answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
