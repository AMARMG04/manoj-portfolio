import type { Config } from "tailwindcss";

export default {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        anderson_r: ["Anderson_Regular", "sans"],
        anderson_b: ["Anderson_Bold", "sans"],
        dm_sans:['var(--font-dm_sans)', "sans-serif"],
        nohemi_l: ["Light", "sans-serif"],
        nohemi_t: ["Thin", "sans-serif"],
        nohemi_r: ["Regular", "sans-serif"],
        nohemi_m: ["Medium", "sans-serif"],
        nohemi_sb: ["SemiBold", "sans-serif"],
        nohemi_b: ["Bold", "sans-serif"],
        nohemi_eb: ["ExtraBold", "sans-serif"],
        abster: ["Abster", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
