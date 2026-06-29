import React from "react";
import type { Metadata } from "next";
import { MessageSquare, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Axiora | Support & Sales",
  description: "Connect with the Axiora team for platform questions, signal inquiries, and support.",
};

export default function ContactPage() {
  return (
    <main className="relative w-full max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col space-y-8 relative z-10 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-space-grotesk">
          Contact <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">Us</span>
        </h1>
        
        <p className="text-neutral-400 font-sans font-light max-w-2xl leading-relaxed">
          Need help or want to learn more about our premium signals? Get in touch with our team or read our documentation below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          <Link href="#" className="p-6 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-space-grotesk tracking-widest text-sm uppercase mb-2">Telegram Support</h3>
            <p className="text-neutral-500 text-xs font-sans leading-relaxed">
              Direct access to our support channels for quick assistance.
            </p>
          </Link>

          <Link href="mailto:enterprise@axiora.io" className="p-6 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-space-grotesk tracking-widest text-sm uppercase mb-2">Enterprise Sales</h3>
            <p className="text-neutral-500 text-xs font-sans leading-relaxed">
              Get details on custom signal feeds and dedicated node settings.
            </p>
          </Link>

          <Link href="#" className="p-6 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold font-space-grotesk tracking-widest text-sm uppercase mb-2">Documentation</h3>
            <p className="text-neutral-500 text-xs font-sans leading-relaxed">
              Read guides on API integrations, alerts, and workspace setup.
            </p>
          </Link>

        </div>

        <div className="mt-12 p-8 rounded-3xl bg-neutral-950/60 border border-neutral-900 backdrop-blur-md text-center">
          <p className="text-neutral-400 font-sans text-sm mb-4">Looking to send a direct message?</p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-bold font-space-grotesk uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors">
            Open Contact Form
          </Link>
        </div>
      </div>
    </main>
  );
}
