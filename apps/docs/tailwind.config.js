/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./theme.config.js",
    "./styles/globals.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
