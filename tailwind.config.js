/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dito natin ilalagay ang mga folders na nakikita sa file structure mo
  content: [
    "./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}", 
    "./utilities/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}", // Para sa global storybook config
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
        textPrimary: "#111111",
        backdrop: "#a4aaae",
        shadow: "rgba(0, 0, 0, 0.08)",
        secondary: "#F3F4F6", 
      },
      fontFamily: {
        body: ["System"], 
      },
    },
  },
  plugins: [],
};