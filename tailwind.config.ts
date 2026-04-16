import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        chai: {
          50:  '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d8ad',
          300: '#e8bc78',
          400: '#dc9a42',
          500: '#c97e28',
          600: '#a8621e',
          700: '#874b1c',
          800: '#6e3d1e',
          900: '#5a331b',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
} satisfies Config
