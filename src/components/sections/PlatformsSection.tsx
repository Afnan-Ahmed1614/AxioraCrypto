"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const partners = [
  { name: "Binance", ticker: "BN" },
  { name: "MEXC", ticker: "MX" },
  { name: "Bitget", ticker: "BG" },
  { name: "CoinMarketCap", ticker: "CM" },
  { name: "Instagram", ticker: "IG" },
  { name: "TikTok", ticker: "TT" },
  { name: "Telegram", ticker: "TG" },
];

const infinitePartners = [...partners, ...partners];

interface LogoChipProps {
  name: string;
  ticker: string;
}

function LogoChip({ name, ticker }: LogoChipProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, filter: "grayscale(0%)", opacity: 1 }}
      initial={false}
      className="group flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-900 bg-neutral-950/60 cursor-default select-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
      style={{ filter: "grayscale(100%)", opacity: 0.6 }}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black text-neutral-300 bg-neutral-900 border border-neutral-800"
      >
        <span>{ticker.slice(0, 2)}</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-white font-space-grotesk whitespace-nowrap leading-tight">
          {name}
        </span>
        <span className="text-[9px] text-neutral-600 font-sans">{ticker}</span>
      </div>
    </motion.div>
  );
}

export default function PlatformsSection() {
  return (
    <section aria-label="Platforms we actively work on" className="relative w-full py-20 overflow-hidden">
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center space-y-4 mb-14 px-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          <span>Platforms</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk">
          Platforms we{" "}
          <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
            actively work on
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light font-sans">
          We track capital movements across all leading blockchains in real time.
        </p>
      </motion.div>

      {/* Infinite Marquee Track */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "marquee 38s linear infinite",
            willChange: "transform",
          }}
        >
          {infinitePartners.map((partner, index) => (
            <LogoChip
              key={`${partner.ticker}-${index}`}
              name={partner.name}
              ticker={partner.ticker}
            />
          ))}
        </div>
      </div>

      {/* Reverse marquee row */}
      <div className="w-full overflow-hidden mt-4">
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "marquee-reverse 42s linear infinite",
            willChange: "transform",
          }}
        >
          {[...infinitePartners].reverse().map((partner, index) => (
            <LogoChip
              key={`rev-${partner.ticker}-${index}`}
              name={partner.name}
              ticker={partner.ticker}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
