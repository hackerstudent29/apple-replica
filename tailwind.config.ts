import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: "#1d1d1f",
          gray: "#86868b",
          lightGray: "#f5f5f7",
          subtleGray: "#d2d2d7",
          blue: "#0071e3",
          hoverBlue: "#0077ed",
          cardDark: "#161617",
          cardLight: "#fbfbfd",
          border: "#d2d2d7",
          darkBorder: "#424245",
          navBg: "rgba(255, 255, 255, 0.8)",
        },
      },
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      transitionTimingFunction: {
        "apple-ease": "cubic-bezier(0.32, 0.72, 0, 1)",
        "apple-spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
