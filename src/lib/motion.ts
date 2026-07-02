import type { Transition, Variants } from 'framer-motion'

/**
 * Centralized motion language. Everything is slow, eased, and non-bouncy per
 * the design brief — no springs with overshoot.
 */

/** Smooth, professional easing curve (ease-out-ish cubic bezier). */
export const EASE = [0.22, 1, 0.36, 1] as const

export const durations = {
  fast: 0.2,
  base: 0.35,
  slow: 0.55,
} as const

/** Route-level page transition. */
export const pageTransition: { variants: Variants; transition: Transition } = {
  variants: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  },
  transition: { duration: durations.slow, ease: EASE },
}

/** Staggered container for notes settling onto the desk. */
export const settleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Individual note settling into place. */
export const settleItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.slow, ease: EASE },
  },
}
