import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // True Black background
        foreground: "#ffffff",
        trueblack: "#000000",
        gold: {
          50: "#FFFDF0",
          100: "#FDF6C7",
          200: "#F7E68F",
          300: "#EFCF53",
          400: "#D4AF37", // Signature Axiora Gold
          500: "#B8942A",
          600: "#92711C",
          700: "#6B5013",
          800: "#44310A",
          900: "#221703",
        },
        cyber: {
          cyan: "#00F0FF",
          magenta: "#FF007A",
          purple: "#BC13FE",
          dark: "#0A0A0C",
          slate: "#121214",
          card: "rgba(10, 10, 12, 0.7)",
          border: "rgba(214, 175, 55, 0.15)",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #ffffff 0%, #a3a3a3 50%, #404040 100%)",
        "cyber-gradient": "linear-gradient(135deg, #ffffff 0%, #737373 50%, #171717 100%)",
        "glass-radial": "radial-gradient(circle at center, rgba(20, 20, 25, 0.6) 0%, rgba(0, 0, 0, 0.95) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(6px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
            filter: "drop-shadow(0 0 8px rgba(214, 175, 55, 0.3))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 20px rgba(214, 175, 55, 0.6))",
          },
        },
        "pulse-cyan": {
          "0%, 100%": {
            opacity: "0.5",
            filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.3))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.6))",
          },
        },
        "gravity-drift": {
          "0%, 100%": {
            transform: "translate(0px, 0px) rotate(0deg)",
          },
          "33%": {
            transform: "translate(6px, -8px) rotate(0.7deg)",
          },
          "66%": {
            transform: "translate(-5px, 4px) rotate(-0.5deg)",
          },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "pulse-cyan": "pulse-cyan 4s ease-in-out infinite",
        "gravity-drift": "gravity-drift 14s ease-in-out infinite",
        "grid-fade": "grid-fade 10s ease-in-out infinite",
        "marquee": "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
