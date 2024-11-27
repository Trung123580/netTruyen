import type { Config } from "tailwindcss"
import { nextui } from '@nextui-org/react'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: 'var(--font-roboto)'
      }
    },
    screens: {
      ...defaultTheme.screens,
      md: '769px',
      xl: '1200px',
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      // },
      // screens: {
      //   sm: '600px',
      //   md: '728px',
      //   lg: '984px',
      //   xl: '1248px',
      // },
    },
  },

  darkMode: "class",
  plugins: [nextui({
    themes:{
      dark:{
        colors: {
          // foreground:'red', // text-color
          // background:'blue' // background-color
        },
      },
      light:{
        colors: {
          // foreground:'red', // text-color
          // background:'blue' // background-color
        }
      }
    }
  })],
} satisfies Config;
