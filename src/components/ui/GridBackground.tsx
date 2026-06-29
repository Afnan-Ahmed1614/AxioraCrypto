import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function GridBackground({
  children,
  className,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full bg-black -z-50 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      {/* 40px Monochrome grid mesh overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 animate-grid-fade" 
        style={{
          maskImage: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 30%, transparent 85%)"
        }}
        aria-hidden="true"
      />

      {/* Subtle white/light-gray ambient backlights (no neon or high-saturated colors) */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-35 animate-gravity-drift" 
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div 
        className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-40 animate-float" 
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)" }}
        aria-hidden="true"
      />



      {children}
    </div>
  );
}
