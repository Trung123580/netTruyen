import type {Config} from 'tailwindcss'
import {nextui} from '@nextui-org/react'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        ...defaultTheme.colors,
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

  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          foreground: 'white', // background-color
          background: 'black', // background-color
          primary: '#e4d804',
        },
      },
      light: {
        colors: {
          foreground: 'black', // background-color
          background: 'white', // background-color
          primary: 'rgba(255, 0, 0, 0.88)',
        }
      }
    }
  })],
} satisfies Config
