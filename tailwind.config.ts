import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-cover":
         "linear-gradient(90.21deg, rgba(170, 54, 124, 0.8) -5.91%, rgba(74, 47, 189, 0.8) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;