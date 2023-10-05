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
        primary: "#2C9CF0",
        primaryLight: "rgba(44, 156, 240, 0.2)",
        primaryLight2: "#2C9CF014",
        primaryDark: "#175CD3",
        secondary: "#54E346",
        white: "#FFFFFF",
        gray: "#707070",
        gray2: "#777777",
        "white-gray": "#FCFCFC",
        dark: "#161616",
        inputBorderColor: "rgba(26, 26, 26, 0.1)",
        inputLabelColor: "rgba(6, 6, 7, 1)",
        menuBg: "#FAFAFA",
        menuItemColor: "#A0AEC0",
        menuBorderColor: "#E6E6E6",
        tableHeadColor: "#F7F7F7",
        radioBorderColor: "#D1D1D6",
        profileBorderBottom: "#CBCBCB",
        profileBorderColor: "#F2F2F2",
        borderError: "#FF0606",
        inputHoverBorder: "#CED4DC",
        btnPrimaryHover: "#1079C8",
        btnSecondaryHover: "#23DA12",
        productInfoBorder: "#E7E7E7",
      },
      boxShadow: {
        xs: "0px 2px 8px 0px rgba(151, 151, 151, 0.15)",
        sm: "0px 0px 10px 0px rgba(0, 0, 0, 0.01)",
        md: "0px 8px 20px 0px rgba(0, 0, 0, 0.05)",
        tableShadow: "0px 0px 20px 0px #0000001A",
        inputHover: "0px 0px 14px 0px #00000026",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      sm2: "400px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
