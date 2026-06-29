import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textColor?: string;
  showText?: boolean;
  monoWhite?: boolean;
}

export default function Logo({
  className = "w-8 h-8",
  textColor = "text-white",
  showText = true,
  monoWhite = true,
}: LogoProps) {
  const primaryColor = monoWhite ? "#ffffff" : "url(#logoGoldGradient)";
  const rightBarColor = monoWhite ? "#ffffff" : "#D4AF37";
  const midBarColor = monoWhite ? "rgba(255, 255, 255, 0.7)" : "#E5E5E5";
  const leftBarColor = monoWhite ? "rgba(255, 255, 255, 0.4)" : "#999999";
  const strokeColor = monoWhite ? "#ffffff" : "url(#logoGoldGradient)";

  return (
    <div className="flex items-center gap-4 select-none">
      <svg
        viewBox="0 0 120 120"
        className={cn("fill-none stroke-none overflow-visible", className)}
        aria-hidden="true"
      >
        {/* Triangular A frame (left leg, right leg, open bottom) */}
        <path
          d="M 60 15 L 20 95 H 36 L 60 47 L 84 95 H 100 L 60 15 Z"
          fill={primaryColor}
        />

        {/* Three vertical bar chart columns inside at the base */}
        {/* Left bar */}
        <rect x="42" y="75" width="6" height="20" rx="1.5" fill={leftBarColor} />
        {/* Middle bar */}
        <rect x="54" y="62" width="6" height="33" rx="1.5" fill={midBarColor} />
        {/* Right bar */}
        <rect x="66" y="50" width="6" height="45" rx="1.5" fill={rightBarColor} />

        {/* Upward trending arrow cutting through the right leg */}
        <path
          d="M 32 85 C 50 74, 72 62, 102 50"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrow head */}
        <path
          d="M 95 44 L 108 48 L 102 60 Z"
          fill={primaryColor}
        />

        {!monoWhite && (
          <defs>
            <linearGradient id="logoGoldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#92711C" />
            </linearGradient>
          </defs>
        )}
      </svg>
      {showText && (
        <div className="flex flex-col text-left">
          <span className={cn("font-bold tracking-[0.25em] text-xl leading-none uppercase font-space-grotesk", textColor)}>
            Axiora
          </span>
          <span className="text-[8px] tracking-[0.3em] uppercase text-neutral-500 font-sans mt-1.5 font-medium whitespace-nowrap">
            Trade • Analyze • Grow
          </span>
        </div>
      )}
    </div>
  );
}
