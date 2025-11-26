/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9f7f3", // very light beige
          100: "#f2ede6", // light beige
          200: "#e5d7c8", // light tan
          300: "#d4bca3", // tan
          400: "#b89575", // medium brown
          500: "#9c7550", // brown
          600: "#7d5a3d", // dark brown
          700: "#62442e", // darker brown
          800: "#4e3524", // very dark brown
          900: "#3d2a1e", // darkest brown
        },
        gray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#3d3935", // warm dark brown-gray
          800: "#2b2724", // warmer very dark brown-gray
          900: "#1c1917", // warmest darkest brown-gray (almost black with brown tint)
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
