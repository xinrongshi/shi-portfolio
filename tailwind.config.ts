import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      body: ["IBM Plex Sans", "sans-serif"],
      heading: ["Oswald", "sans-serif"],
      mono: ["Syne Mono", "monospace"],
    },
    extend: {
      colors: {
        bg: "#F2F2F2",
        icon: "#550CF2",
        purple: "#7B44F2",
        black: "#0D0D0D",
        blue: "#32088C",
      },
    },
  },
  plugins: [],
};
export default config;
