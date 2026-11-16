import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyberRed: "#F84A4A",
        cyberCyan: "#38BDF8",
        cyberNeon: "#00F0FF",
        cyberBlack: "#050608",
        // Deep Cinematic Tones
        cinematic: {
          950: "#040507",
          900: "#080a0f",
          850: "#0e1118",
          800: "#141822",
          700: "#1e2433",
          600: "#2d354a",
          border: "rgba(255, 255, 255, 0.08)",
          glass: "rgba(14, 17, 24, 0.72)",
        },
        // Filmic Amber & Tungsten Gold
        amber: {
          flare: "#fbbf24",
          tungsten: "#f59e0b",
          burn: "#d97706",
          glow: "rgba(245, 158, 11, 0.35)",
        },
        // Titanium & Anamorphic Platinum
        platinum: {
          light: "#f8fafc",
          pure: "#ffffff",
          muted: "#cbd5e1",
          slate: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        cinematic: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        anton: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        titan: ['"Titan One"', 'cursive', 'sans-serif'],
        bungee: ['"Bungee"', 'cursive', 'sans-serif'],
        dela: ['"Dela Gothic One"', 'sans-serif'],
        serifTitle: ['"Playfair Display"', '"Cinzel"', 'serif'],
        title: ['"Cinzel"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        orbitron: ['"Orbitron"', '"Share Tech Mono"', '"JetBrains Mono"', 'monospace'],
        shareTech: ['"Share Tech Mono"', '"Orbitron"', 'monospace'],
      },
      animation: {
        "lens-flare": "flareSweep 8s ease-in-out infinite",
        "film-flicker": "flicker 0.15s infinite",
        "slow-pan": "slowPan 20s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        flareSweep: {
          "0%, 100%": { opacity: 0.2, transform: "translateX(-20%) scaleX(1)" },
          "50%": { opacity: 0.6, transform: "translateX(20%) scaleX(1.15)" },
        },
        flicker: {
          "0%, 100%": { opacity: 0.98 },
          "50%": { opacity: 1 },
        },
        slowPan: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.04) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
