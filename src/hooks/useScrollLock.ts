import { useEffect } from 'react'

/**
 * Locks body scrolling while `locked` is true (used by the Work modal), and
 * compensates for the scrollbar width to avoid a layout shift on open.
 */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPaddingRight = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPaddingRight
    }
  }, [locked])
}
