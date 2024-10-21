import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              50: "#fff4ed",
              100: "#fee5d6",
              200: "#fcc8ac",
              300: "#faa177",
              400: "#f66c3b",
              500: "#f34c1c",
              600: "#e43212",
              700: "#bd2311",
              800: "#971e15",
              900: "#791b15",
              DEFAULT: "#e43212",
              foreground: "#ffffff",
            },
          },
        },
        light: {
          colors: {
            primary: {
              50: "#fff4ed",
              100: "#fee5d6",
              200: "#fcc8ac",
              300: "#faa177",
              400: "#f66c3b",
              500: "#f34c1c",
              600: "#e43212",
              700: "#bd2311",
              800: "#971e15",
              900: "#791b15",
              DEFAULT: "#e43212",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
export default config;
