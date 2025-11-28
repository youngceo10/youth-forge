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
        'yf-primary': {
          DEFAULT: '#9ACDE6',
          50: '#F0F8FC',
          100: '#E1F1F9',
          200: '#C3E3F3',
          300: '#9ACDE6',
          400: '#6BB5D9',
          500: '#4BA3CC',
          600: '#3B82A3',
          700: '#2D627A',
          800: '#1F4252',
          900: '#0F2129',
        },
        'yf-blue': {
          50: '#F0F8FC',
          100: '#E1F1F9',
          200: '#C3E3F3',
          300: '#9ACDE6',
          400: '#6BB5D9',
          500: '#4BA3CC',
        },
        'yf-accent': {
          green: '#7BC043',
          red: '#EF3E36',
          blue: '#0074D9',
          yellow: '#FFDC00',
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
