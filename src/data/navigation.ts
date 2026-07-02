import type { NavLink } from './types'

/** Primary in-app navigation (right side of the navbar). */
export const navLinks: NavLink[] = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
]

/** Wordmark shown on the left of the navbar; clicking it returns Home. */
export const brand = {
  name: 'CAITLYN LEE',
  subtitle: 'CS & Business Analytics @ UC San Diego',
} as const
