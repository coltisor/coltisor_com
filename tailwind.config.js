/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    /**
     * Font Family
     */
    fontFamily: {
      sans: 'Jost, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Jacques Francois", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Inconsolata, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    /**
     * Breakpoints | Keep in sync with styles/breakpoints.ts
     */
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Safari and Chrome */,
            },
          },
          ".scrollbar-default": {
            "-ms-overflow-style": "auto" /* IE and Edge */,
            "scrollbar-width": "auto" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "block" /* Safari and Chrome */,
            },
          },
        },
        ["responsive"]
      );
    }),
  ],
};
