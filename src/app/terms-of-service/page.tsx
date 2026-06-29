import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Axiora",
  description: "Terms of service and user agreement for accessing the Axiora data feeds and signals.",
};

export default function TermsOfServicePage() {
  return (
    <main className="relative w-full max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col space-y-8 relative z-10 text-left">
        
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk mb-4">
            Terms of Service
          </h1>
          <p className="text-neutral-500 font-sans text-sm font-light">Last Updated: June 28, 2025</p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl shadow-2xl space-y-8 text-neutral-400 font-sans font-light leading-relaxed text-sm">
          
          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Axiora dashboard, APIs, or signals, you agree to these Terms of Service. If you do not agree, you are not allowed to use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">2. Description of Service</h2>
            <p>
              Axiora provides cryptocurrency signals and market tracking data. The data provided is for informational and educational purposes only. We do not make trades for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">3. API Usage & Rate Limits</h2>
            <p>
              Access to our signal feeds is subject to usage limits based on your plan. Attempting to bypass these limits, disrupt our servers, or copy our systems will result in immediate loss of access without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">4. Intellectual Property</h2>
            <p>
              The Axiora platform, including its software systems, designs, and code, is the exclusive property of Axiora. You are granted a limited license to use our data, but you may not sell or redistribute our raw streams commercially.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The platform is provided "AS IS". While we strive for high accuracy, we cannot guarantee the correctness or timeliness of blockchain data due to the unpredictable nature of crypto markets.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">6. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Switzerland (Zug), without regard to its conflict of law rules.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
