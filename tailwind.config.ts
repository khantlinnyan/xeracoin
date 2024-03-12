import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#1a76d2",
        "primary-light": "#7b9dd9",

        yellow: "#ffc600",
        "yellow-dark": "#cc9a00",

        green: "#4eaf2e",
        "green-light": "#90d989",

        gray: "#777777",
        graydark: "#333333",
      },
    },
  },

  plugins: [],
};

export default config;
