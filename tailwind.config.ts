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
        'yf-blue': {
          50: '#8bc4e0',
          100: '#619bb6',
          200: '#37738d',
          300: '#004e66',
          400: '#002c42',
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
