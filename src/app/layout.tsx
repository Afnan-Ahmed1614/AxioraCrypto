import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundTracker from "@/components/BackgroundTracker";
import GridBackground from "@/components/ui/GridBackground";
import Footer from "@/components/sections/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Axiora | Crypto Trading Signals Platform",
  description: "Get high-accuracy crypto trading signals instantly. Track whale movements and follow market trends easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Injecting structural JSON-LD schemas for WebApplication SEO optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Axiora Crypto Signals Platform",
    "alternateName": "Axiora Intel",
    "url": "https://axiora.intel", // Mock domain
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "description": "Get high-accuracy crypto trading signals instantly. Track whale movements and follow market trends easily.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "category": "Developer Tier"
    }
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden min-h-screen w-full relative bg-black text-white select-none">
        {/* Interactive Mouse Coordinate Layer */}
        <BackgroundTracker />
        
        {/* Dynamic Low-Opacity Space Mesh Backdrop */}
        <GridBackground />

        {/* Root children container with viewport constraint rules */}
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
