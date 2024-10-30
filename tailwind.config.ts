import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
        },
        orange: '#FFBF00',
        black: {
          DEFAULT: '#2a2a2a',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'sf-pro': ['var(--font-sf-pro)'],
      },
      spacing: {
        extrasmall: '6px',
        small: '12px',
        medium: '22px',
        semilarge: '32px',
        large: '38px',
      },
    },
  },
  plugins: [],
}
export default config
