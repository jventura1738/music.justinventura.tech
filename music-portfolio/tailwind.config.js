/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // this theme should be black:
        theme: "#000000",
      },
      fontFamily: {
        // this is my imported font 'inter':
        inter: ["Inter", "sans-serif"],
      },
    },
    // This is better than what i used before.
    // I prefer to target this way
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
