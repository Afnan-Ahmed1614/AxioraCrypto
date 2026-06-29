"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> {
  children?: React.ReactNode;
  glowColor?: "gold" | "cyan" | "magenta" | "default";
  enableFloat?: boolean;
}

export default function GlowCard({
  children,
  className,
  glowColor = "default",
  enableFloat = true,
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for cursor tracking relative to card boundaries
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Dampened spring configurations for premium lag-free tilt response
  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 175 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 175 });

  // Map coordinates into 3D rotations (-8deg to 8deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Map coordinates to translate absolute spotlight percentages
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalise mouse position between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColors = {
    gold: "rgba(255, 255, 255, 0.05)",
    cyan: "rgba(255, 255, 255, 0.05)",
    magenta: "rgba(255, 255, 255, 0.05)",
    default: "rgba(255, 255, 255, 0.04)",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative rounded-2xl glass-panel p-6 overflow-hidden transition-all duration-300",
        enableFloat && "animate-float",
        className
      )}
      {...props}
    >
      {/* Interactive spotlight reflection */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 280px at ${glowX} ${glowY}, ${glowColors[glowColor]}, transparent 80%)`,
        }}
      />
      
      {/* 3D content isolation to prevent flattening */}
      <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }} className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
