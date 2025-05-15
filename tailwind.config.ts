import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        wine: {
          50: "#f9e6e8",
          100: "#f3cdd1",
          200: "#e79a9f",
          300: "#da676d",
          400: "#ce353c",
          500: "#c12029",
          600: "#9a1a21",
          700: "#7d2e38",
          800: "#5c1b22",
          900: "#3b1419",
          950: "#1f0a0d",
        },
        gold: {
          50: "#fbf8e5",
          100: "#f7f1cc",
          200: "#eee299",
          300: "#e6d466",
          400: "#ddc533",
          500: "#d4b62b",
          600: "#a99222",
          700: "#7e6d19",
          800: "#544911",
          900: "#2a2408",
          950: "#151204",
        },
        cream: "#F8F3E3",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
