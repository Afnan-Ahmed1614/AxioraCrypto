import React from "react";
import Link from "next/link";
import { Sparkles, MessageSquare } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Roadmap", href: "/#roadmap" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="w-full relative overflow-hidden bg-black pt-20 pb-10 border-t border-neutral-900">
      
      <div 
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] pointer-events-none opacity-[0.01]"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(255, 255, 255, 1) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            <div className="flex items-center">
              <Logo className="w-8 h-8" showText={true} />
            </div>
            
            <p className="text-neutral-500 font-sans text-sm font-light max-w-xs leading-relaxed text-left">
              The smartest way to track crypto trends. Get high-accuracy trading signals instantly.
            </p>
            
            <a
              href="https://t.me/Corisher_Ashtato"
              aria-label="Contact Axiora on Telegram: @Corisher_Ashtato"
              className="inline-flex items-center gap-2.5 pt-2 text-sm text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="font-sans font-light">
                Telegram: @Corisher_Ashtato
              </span>
            </a>
          </div>

          {/* Col 2: Company */}
          <nav aria-label="Company links" className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <h2 className="text-white font-bold font-space-grotesk tracking-widest text-xs uppercase mb-1">
              Company
            </h2>
            <ul className="flex flex-col space-y-3 list-none p-0 m-0">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-500 hover:text-white text-sm font-sans transition-colors relative group inline-flex items-center focus-visible:outline-none focus-visible:text-white"
                  >
                    <span aria-hidden="true" className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:-left-4 transition-all text-white text-[10px]">
                      ▸
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Legal */}
          <nav aria-label="Legal links" className="lg:col-span-3 flex flex-col space-y-4 text-left">
            <h2 className="text-white font-bold font-space-grotesk tracking-widest text-xs uppercase mb-1">
              Legal
            </h2>
            <ul className="flex flex-col space-y-3 list-none p-0 m-0">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-500 hover:text-white text-sm font-sans transition-colors relative group inline-flex items-center focus-visible:outline-none focus-visible:text-white"
                  >
                    <span aria-hidden="true" className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:-left-4 transition-all text-white text-[10px]">
                      ▸
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-900 mb-6" aria-hidden="true" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 font-sans m-0">
            © {new Date().getFullYear()} Axiora Intel. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-neutral-600 font-sans m-0">
            <Sparkles className="w-3 h-3 text-white/50" aria-hidden="true" />
            Built for the zero-gravity era.
          </p>
        </div>

      </div>
    </footer>
  );
}
