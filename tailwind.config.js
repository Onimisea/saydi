// -- Small (sm): Typically used for mobile devices in portrait mode. This breakpoint targets devices with a minimum width of around 640px.
// -- Medium (md): Often used for larger mobile devices or tablets in portrait mode. This breakpoint targets devices with a minimum width of around 768px.
// -- Large (lg): Commonly used for tablets in landscape mode or small laptops. This breakpoint targets devices with a minimum width of around 1024px.
// -- Extra-large (xl): Used for larger laptops and desktops. This breakpoint targets devices with a minimum width of around 1280px.

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        sm2: "640px",
        md: "768px",
        md2: "840px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#950D95", // Custom primary color
        secondary: "#000180", // Custom secondary color
        // Add more custom colors here
        tertiary: "#950D95",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        montserrat_italic: ["var(--font-montserrat-italic)"],
        gillsans_bold: ["var(--font-gillsans-bold)"],
        gillsans_heavy: ["var(--font-gillsans-heavy)"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #000180 0%, #950D95 100%)",
        "gradient-secondary":
          "linear-gradient(180deg, #D65F1B 0%, #DEB30C 100%)",
        // "hero-pattern": "url('/path/to/image.jpg')", // Custom background image
        // Add more custom background images here
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
