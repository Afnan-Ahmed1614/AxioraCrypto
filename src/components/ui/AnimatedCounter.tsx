"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>((0).toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          // Format based on decimal requirement
          const formatted = latest.toFixed(decimals);
          // Apply locale formatting to the integer part
          if (decimals === 0) {
            setDisplayValue(Math.floor(latest).toLocaleString());
          } else {
            const parts = formatted.split(".");
            const integerPart = parseInt(parts[0], 10).toLocaleString();
            setDisplayValue(`${integerPart}.${parts[1]}`);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
