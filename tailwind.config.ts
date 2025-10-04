import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#e7f0ff',
          200: '#c5dbff',
          300: '#9abfff',
          400: '#6a9cff',
          500: '#3d77ff',
          600: '#1e5df5',
          700: '#1749c2',
          800: '#153d9c',
          900: '#13367f'
        }
      },
      boxShadow: {
        card: '0 2px 10px rgba(0,0,0,0.06)',
        header: '0 2px 12px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
}

export default config
