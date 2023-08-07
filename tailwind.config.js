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
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px (root font-size)
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        // Add more custom font-sizes as needed
      },
      screens: {
        sm: "480px",
        sm3: "568px",
        sm2: "640px",
        sm4: "630px",
        md: "768px",
        md2: "840px",
        md3: "960px",
        lg: "1024px",
        lg2: "1156px",
        xl: "1280px",
        xl2: "1236px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#950D95", // Custom primary color
        secondary: "#000180", // Custom secondary color
        // Add more custom colors here
        tertiary: "#14579E",
        tertiary2: "#D65F1B",
        white50: "rgba(255, 255, 255, 0.5)",
        white80: "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        montserrat_italic: ["var(--font-montserrat-italic)"],
        gillsans_bold: ["var(--font-gillsans-bold)"],
        gillsans_heavy: ["var(--font-gillsans-heavy)"],
      },
      boxShadow: {
        custom: "0px 8px 12px rgba(52, 87, 140, 0.12)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #000180 0%, #950D95 100%)",
        "gradient-secondary":
          "linear-gradient(180deg, #D65F1B 0%, #DEB30C 100%)",
        "gradient-tertiary": "linear-gradient(90deg, #950D95 0%, #000180 100%)",
        "gradient-secondary2":
          "linear-gradient(0deg, #D65F1B 0%, #DEB30C 100%)",
        "hero-section-gf": "url('../public/assets/home/hero_section_gf.png')",
        "our-partners-gf": "url('../public/assets/home/our_partners_gf.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
