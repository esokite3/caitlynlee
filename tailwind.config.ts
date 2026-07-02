import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        sticky: 'rgb(var(--color-sticky) / <alpha-value>)',
        'sticky-edge': 'rgb(var(--color-sticky-edge) / <alpha-value>)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        hand: 'var(--font-hand)',
        shabby: 'var(--font-shabby)',
        biro: 'var(--font-biro)',
      },
      boxShadow: {
        note: '0 6px 14px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'note-hover': '0 18px 32px rgba(0, 0, 0, 0.18), 0 6px 10px rgba(0, 0, 0, 0.10)',
        'note-modal': '0 30px 60px rgba(0, 0, 0, 0.30), 0 10px 20px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config
