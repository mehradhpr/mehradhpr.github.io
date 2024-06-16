import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*"],
  theme: {
    colors: {
      general: "#bababa",
      hidden: "#8a8a8a",
      title: "#e3e3e3",
      blue: "#5296FC",
      pink: "#D15EFF",
      background: "#121212",
      gray1: "#242424",
      gray2: "#333333",
    },
    extend: {
      boxShadow: {
        "4xl": "0 35px 60px -15px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
} as Config;
