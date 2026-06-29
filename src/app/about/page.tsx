import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Axiora | Crypto Signals Platform",
  description: "Built by a trader, for traders. Learn about Axiora's founder Afnan Ahmed and our mission to deliver fast, simple, and direct blockchain signals.",
  openGraph: {
    title: "About Axiora | Crypto Signals Platform",
    description: "Built by a trader, for traders. Learn about Axiora's founder Afnan Ahmed and our mission.",
    type: "website",
  }
};

export default function AboutPage() {
  return (
    <main className="relative w-full max-w-4xl mx-auto px-6 py-32 min-h-screen">
      {/* Background spotlights (Monochromatic) */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.01]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      
      <div className="flex flex-col space-y-8 relative z-10 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-space-grotesk">
          About <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">Axiora</span>
        </h1>
        
        <div className="p-8 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-white font-space-grotesk mb-4">Our Mission</h2>
          <p className="text-neutral-400 font-sans font-light leading-relaxed mb-6">
            Axiora is built to make crypto analysis simple and fast. We help you track market trends and whale wallet transfers easily without complicated setups.
          </p>
          
          <h2 className="text-2xl font-bold text-white font-space-grotesk mb-4 mt-10">Founder Story</h2>
          <p className="text-neutral-400 font-sans font-light leading-relaxed mb-4">
            Founded in 2025 by <span className="text-white font-medium">Afnan Ahmed</span>, an experienced crypto researcher and data engineer. After years of frustration with slow explorers and complicated dashboards, Afnan set out to build a platform that delivers clean, direct intelligence.
          </p>
          <p className="text-neutral-400 font-sans font-light leading-relaxed">
            The result is Axiora: a simple, lightning-fast terminal that puts accuracy first, giving you clean data without any unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-neutral-950/60 border border-neutral-900 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white font-space-grotesk tracking-widest uppercase mb-3">Direct Feeds</h3>
            <p className="text-sm text-neutral-500 font-sans leading-relaxed">
              We pull data directly from blockchain nodes so you get accurate alerts ahead of the market.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-950/60 border border-neutral-900 backdrop-blur-md">
            <h3 className="text-lg font-bold text-neutral-300 font-space-grotesk tracking-widest uppercase mb-3">Data Privacy</h3>
            <p className="text-sm text-neutral-500 font-sans leading-relaxed">
              We keep your account secure and check history private. Your strategies are safe with us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
