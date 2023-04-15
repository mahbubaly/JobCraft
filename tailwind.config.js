/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "purple",

          "secondary": "#e4b0f4",

          "accent": "#8cf7f2",

          "neutral": "#211B2D",

          "base-100": "#FCFCFD",

          "info": "#9CCBE7",

          "success": "#2FBCAB",

          "warning": "#E7900D",

          "error": "#E56C94",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

