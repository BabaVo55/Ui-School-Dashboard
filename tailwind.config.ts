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
      colors:{
        ethemSky: "#C4EBFA",
        ethemSkyLight: "#EDF9FD",
        ethemBlue: "#2188FF",
        ethemBlueLight: "#73B9FF",
        ethemRed: "#FF4747",
        ethemRedLight: "#FF7777",
        ethemGreen: "#34D399",
        ethemGreenLight: "#82E4BE",
        ethemOrange: "#FFA800",
        ethemOrangeLight: "#FFC857",
        ethemPurple: "#835AFF",
        ethemPurpleLight: "#B794FC",
        ethemYellow: "#F9C23C",
        ethemYellowLight: "#FED766",
        ethemTeal: "#38B2AC",
        ethemTealLight: "#89D2EA",
        ethemPink: "#FF71B0",
        ethemPinkLight: "#FFA2C9",
        ethemBrown: "#574B4B",
        ethemBrownLight: "#8D7979",
        ethemWhite: "#ffffff",
        ethemBlack: "#000000",
        ethemGray: "#9B9B9B",
        ethemGrayLight: "#C4C4C4",
        ethemDarkGray: "#333333",
        ethemDarkGrayLight: "#666666",
        ethemLightGray: "#E5E5E5",
        ethemDarkerGray: "#222222",
        ethemDarkerGrayLight: "#444444",
        ethemTransparent: "transparent",
      }
    },
  },
  plugins: [],
};
export default config;
