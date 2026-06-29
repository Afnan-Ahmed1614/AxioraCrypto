"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, MessageSquare, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Telegram Support",
    desc: "Direct access to our support engineers.",
    linkText: "@Corisher_asthato",
    url: "https://t.me/Corisher_asthato",
    color: "neutral"
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Reach our team for membership and platform questions.",
    linkText: "elitetrackers.offical@gmail.com",
    url: "mailto:elitetrackers.offical@gmail.com",
    color: "neutral"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    desc: "Official registered location.",
    linkText: "Pakistan",
    url: "#",
    color: "neutral"
  }
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      from_name: "Axiora Contact Form",
    };

    if (!payload.access_key) {
      setSubmitStatus("error");
      setStatusMessage("Form is not configured yet. Please email us directly at elitetrackers.offical@gmail.com.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage("Your message has been sent successfully. We will get back to you soon.");
        form.reset();
      } else {
        throw new Error(result.message ?? "Submission failed");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Something went wrong. Please try again or email elitetrackers.offical@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* Subtle white ambient background blurs */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-[0.015]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-[0.015]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
        
        {/* LEFT PANE: Communication Blocks */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-900 text-xs text-neutral-400 w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk mb-4">
              Get{" "}
              <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-glow-white">
                Signals
              </span>
            </h2>
            <p className="text-neutral-400 font-light font-sans leading-relaxed max-w-sm">
              Connect with our team to set up custom data alerts, discuss enterprise plans, or ask any platform questions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <a
                  key={idx}
                  href={method.url}
                  aria-label={`${method.title}: ${method.linkText}`}
                  className="group relative p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900 hover:border-white/20 backdrop-blur-sm transition-all duration-300 flex items-start gap-4 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border bg-neutral-900 border-neutral-800 text-neutral-200">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm font-space-grotesk mb-1">
                      {method.title}
                    </span>
                    <span className="text-neutral-500 text-[11px] font-sans mb-3">
                      {method.desc}
                    </span>
                    <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                      {method.linkText} <span className="text-[10px]">→</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Vertical Decorative Divider (Desktop) */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center" aria-hidden="true">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        </div>

        {/* RIGHT PANE: Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col justify-center relative"
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Top corner highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] pointer-events-none" aria-hidden="true" />

            <form
              action={WEB3FORMS_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput id="name" label="Full Name" type="text" />
                <FloatingInput id="email" label="Email Address" type="email" />
              </div>

              <FloatingInput id="subject" label="Subject" type="text" />
              
              <FloatingTextarea id="message" label="Message Details..." />

              <AnimatePresence mode="wait">
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                    aria-live="polite"
                    className={cn(
                      "rounded-xl border px-4 py-3 text-sm font-sans font-light leading-relaxed",
                      submitStatus === "success"
                        ? "border-white/20 bg-white/5 text-neutral-200"
                        : "border-red-900/60 bg-red-950/20 text-red-300"
                    )}
                  >
                    {statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send secure contact message"
                aria-busy={isSubmitting}
                className="group relative w-full h-12 rounded-full bg-white hover:bg-neutral-200 text-black font-bold font-space-grotesk uppercase tracking-widest text-xs flex items-center justify-center gap-2 overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                <Send className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function FloatingInput({ id, label, type }: { id: string; label: string; type: string }) {
  return (
    <div className="relative group text-left">
      <input
        type={type}
        id={id}
        name={id}
        required
        className="peer w-full h-14 bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 pt-4 pb-1 text-sm text-white placeholder-transparent focus:outline-none focus:border-white/40 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition-all bg-transparent focus-visible:ring-0"
        placeholder={label}
        autoComplete={type === "email" ? "email" : type === "text" && id === "name" ? "name" : "off"}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-sm text-neutral-500 font-sans transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-white peer-valid:top-1.5 peer-valid:text-[10px] pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ id, label }: { id: string; label: string }) {
  return (
    <div className="relative group text-left">
      <textarea
        id={id}
        name={id}
        required
        rows={4}
        className="peer w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 pt-6 pb-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-white/40 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition-all resize-none bg-transparent"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-sm text-neutral-500 font-sans transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-white peer-valid:top-2 peer-valid:text-[10px] pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}
