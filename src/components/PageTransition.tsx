import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../lib/motion'

/**
 * Wraps a route's content in a slow, subtle fade/slide. Works with
 * AnimatePresence at the router level to animate between pages.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageTransition.variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  )
}
