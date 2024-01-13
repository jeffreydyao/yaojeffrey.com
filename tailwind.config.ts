import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["New York", ...defaultTheme.fontFamily.sans],
      mono: ["SF Mono", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
export default config;
