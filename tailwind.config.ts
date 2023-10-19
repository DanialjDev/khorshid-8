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
        primaryLight3: "#E5F3FD",
        primaryLight4: "#F0F0F0",
        primaryDark: "#175CD3",
        primaryDark2: "#00183B",
        primaryDark3: "#1F384C",
        primaryDark4: "#2C9CF00D",
        primaryDark5: "#1B4E9B",
        primaryDark6: "#0D6EFD",
        secondary: "#54E346",
        redColor: "#E21414",
        redColorLight: "#E214140D",
        white: "#FFFFFF",
        gray: "#707070",
        gray2: "#777777",
        "white-gray": "#FCFCFC",
        dark: "#161616",
        inputBorderColor: "rgba(26, 26, 26, 0.1)",
        // inputLabelColor: "rgba(6, 6, 7, 1)",
        menuBg: "#FAFAFA",
        menuItemColor: "#A0AEC0",
        menuBorderColor: "#E6E6E6",
        tableHeadColor: "#EAEAEA",
        radioBorderColor: "#D1D1D6",
        profileBorderBottom: "#CBCBCB",
        profileBorderColor: "#F2F2F2",
        borderError: "#FF0606",
        inputHoverBorder: "#CED4DC",
        btnPrimaryHover: "#1079C8",
        btnSecondaryHover: "#23DA12",
        productInfoBorder: "#E7E7E7",
        adminMenuItemActive: "#C9DFFF33",
        menuHeaderBorder: "#C8CBD9",
        inputLabelColor: "#2D3748",
        posterBoxBorder: "#1A1A1A14",
        posterBoxActiveBorder: "#1DC9A0",
        posterTitleColor: "#060607",
        posterNoImgText: "#E41819",
        adminBg: "#F5F5F7",
        tableRowColor: "#F7F7F7",
        emptyTableText: "#191919",
        confirmBtnBg: "#AFE6E533",
        denyBtnBg: "#E214141A",
        adminFormBorder: "#D2D2D2",
        adminFormBorder2: "#1A1A1A0D",
        declineBoxBorder: "#E8E8E8",
        declineBoxTitle: "#2F384F",
        newsBoxBg: "#FEFEFE",
        newsIconBg: "#F4F6FA",
      },
      boxShadow: {
        xs: "0px 2px 8px 0px rgba(151, 151, 151, 0.15)",
        sm: "0px 0px 10px 0px rgba(0, 0, 0, 0.01)",
        md: "0px 8px 20px 0px rgba(0, 0, 0, 0.05)",
        tableShadow: "0px 0px 20px 0px #0000001A",
        inputHover: "0px 0px 14px 0px #00000026",
        adminFormBox: " 0px 2px 6px 0px #1A1A1A1A",
        declineBox: "0px 8px 26px 1px #0000004D",
        statisticsBox: "0px 3.5px 5.499999523162842px 0px #0000000A",
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
