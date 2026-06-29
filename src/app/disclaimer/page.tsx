import React from "react";
import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Axiora",
  description: "Financial disclaimer and risk warnings regarding crypto signals and market data provided by Axiora.",
};

export default function DisclaimerPage() {
  return (
    <main className="relative w-full max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col space-y-8 relative z-10 text-left">
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk">
            Disclaimer
          </h1>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl shadow-2xl space-y-8 text-neutral-400 font-sans font-light leading-relaxed text-sm">
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium">
            The information provided on the Axiora platform does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the platform's content as such.
          </div>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">1. No Investment Recommendation</h2>
            <p>
              Axiora is a data analytics and signal tool. We do not recommend that any cryptocurrency should be bought, sold, or held by you. Conduct your own research and consult your financial advisor before making any investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">2. Cryptocurrency Risk Warning</h2>
            <p>
              Trading cryptocurrency is subject to high market risk and extreme volatility. You could lose your entire investment. The on-chain metrics and signals provided by our terminal are statistical probabilities, not guarantees of future performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">3. Data Accuracy & Market Feeds</h2>
            <p>
              Blockchain networks frequently experience block reorganizations, sudden spikes, and transaction failures. While our nodes are highly optimized, data displayed may occasionally lag or be retroactively altered by consensus mechanisms outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">4. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Axiora Intel, its founders, or affiliates be held liable for any direct, indirect, special, or consequential damages resulting from the use of, or the inability to use, our signals for trading execution.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
