import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Axiora",
  description: "Privacy policy outlining data collection, security, and usage for the Axiora crypto signals platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col space-y-8 relative z-10 text-left">
        
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-space-grotesk mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 font-sans text-sm font-light">Last Updated: June 28, 2025</p>
        </div>

        <div className="p-8 rounded-3xl bg-neutral-950/70 border border-neutral-900 backdrop-blur-xl shadow-2xl space-y-8 text-neutral-400 font-sans font-light leading-relaxed text-sm">
          
          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">1. Information We Collect</h2>
            <p>
              We collect minimal personal data required to operate the Axiora signals platform. This includes account credentials, billing information for enterprise clients, and technical logs required for rate limiting and API access control. We do not track individual trading strategies or portfolio contents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">2. How We Use Your Information</h2>
            <p>
              Data is strictly utilized for the provisioning of our services, signal delivery, security monitoring against DDoS attacks, and processing subscription payments. We do not sell your personal data to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">3. Data Security & Storage</h2>
            <p>
              All traffic between your browser and our servers is encrypted. User credentials and API keys are heavily salted and hashed. We employ secure data encryption to ensure your accounts and signals remain confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">4. Third-Party Services</h2>
            <p>
              We may utilize third-party infrastructure providers (such as data node hosts and payment processors). These providers are bound by strict data processing agreements and are only given the absolute minimum data required to perform their role.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white font-space-grotesk mb-3">5. Contact Information</h2>
            <p>
              If you have any questions regarding how we handle your data, or if you wish to exercise your right to be forgotten, please contact our data protection officer at <a href="mailto:privacy@axiora.io" className="text-white hover:underline font-medium">privacy@axiora.io</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
