"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Signals", href: "#terminal" },
  { label: "Timeline", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-neutral-900 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with prominent monochrome white geometric SVG */}
        <a href="#" aria-label="Axiora — go to homepage" className="flex items-center">
          <Logo className="w-10 h-10" showText={true} monoWhite={true} />
        </a>

        {/* Desktop Nav Items */}
        <div
          className="hidden md:flex items-center gap-2 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 font-sans focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 rounded-md"
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="navbar-hover-line"
                  aria-hidden="true"
                  className="absolute bottom-0 left-2 right-2 h-[1px] bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Get Signals - Pure Pill-Shape Minimalism */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            aria-label="Get Signals"
            className="px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get Signals
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex md:hidden text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {isMobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Slide-Down Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="region"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, scaleY: 0.95, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 border-t border-b border-neutral-900 py-6 px-6 flex flex-col space-y-4 md:hidden bg-black/95 shadow-2xl z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-neutral-400 hover:text-white font-medium text-base transition-colors focus-visible:outline-none focus-visible:text-white"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-neutral-900" aria-hidden="true" />
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-3 rounded-full text-center text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Signals
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
