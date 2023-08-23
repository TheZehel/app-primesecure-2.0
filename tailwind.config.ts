import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bluePrime: "#03a8db",
        bluePrime2: "#323d93",
        grayPrime: "#313131",
        greenPromo: "#1eea1e",
        alertRed: "#FF0000",
        pinkPrime: "#f718f7",
      },
    },
  },
  plugins: [],
};
export default config;
