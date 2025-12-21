/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        accent: "#00ADB5",
        lightgray: "#393E46"
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
