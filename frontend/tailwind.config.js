import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "sunset",
      "dim",
      "winter",
      "coffee",
      "night",
      "dracula",
      {
        mytheme: {
          "primary": "#d946ef",
          "secondary": "#ff00ff",
          "accent": "#f43f5e",
          "neutral": "#ff00ff",
          "base-100": "#f472b6",
          "info": "#ffe4e6",
          "success": "#00ff00",
          "warning": "#fbbf24",         
          "error": "#ff0000",
                    },
      },
    ],
  },
};
