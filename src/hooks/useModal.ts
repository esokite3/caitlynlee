import { useCallback, useState } from 'react'

export interface ModalController<T> {
  /** The currently open item, or null when closed. */
  active: T | null
  isOpen: boolean
  open: (item: T) => void
  close: () => void
}

/**
 * Generic single-item modal state. Only one item can be open at a time, which
 * matches the Work-page requirement.
 */
export function useModal<T>(): ModalController<T> {
  const [active, setActive] = useState<T | null>(null)

  const open = useCallback((item: T) => setActive(item), [])
  const close = useCallback(() => setActive(null), [])

  return { active, isOpen: active !== null, open, close }
}
