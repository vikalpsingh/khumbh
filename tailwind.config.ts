import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#211A17",
        saffron: "#E8672A",
        maroon: "#641F26",
        sand: "#F4EBDD",
        cream: "#FCF8F1",
        gold: "#C99B52",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(58, 35, 24, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
