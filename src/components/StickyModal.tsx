import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { WorkItem } from '../data/types'
import { EASE, durations } from '../lib/motion'
import { useScrollLock } from '../hooks/useScrollLock'
import { useFocusTrap } from '../hooks/useFocusTrap'

/**
 * The enlarged, centered sticky note shown when a Work note is opened. Morphs
 * from the grid note via a shared `layoutId`, over a dark blurred backdrop.
 * Displays only the resume bullet descriptions. Dismissed by backdrop click,
 * Escape, or the close button.
 */
export default function StickyModal({
  item,
  onClose,
}: {
  item: WorkItem
  onClose: () => void
}) {
  const noteRef = useRef<HTMLDivElement>(null)

  useScrollLock(true)
  useFocusTrap(noteRef, true)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — details`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: durations.base, ease: EASE }}
      />

      {/* The note — stays square as it enlarges */}
      <motion.div
        ref={noteRef}
        layoutId={`note-${item.id}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        className="relative z-10 flex aspect-square w-[min(86vmin,600px)] max-w-[92vw] flex-col overflow-hidden bg-sticky shadow-note-modal"
        transition={{ duration: durations.slow, ease: EASE }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute left-4 top-4 z-10 inline-flex text-ink/60 transition-opacity duration-200 hover:opacity-60"
        >
          <X size={22} strokeWidth={2.4} aria-hidden />
        </button>

        <motion.ul
          className="flex min-h-0 flex-1 flex-col justify-center gap-5 overflow-y-auto px-8 py-14 sm:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: durations.base, ease: EASE, delay: 0.15 }}
        >
          {item.description.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 font-sans text-[0.95rem] font-medium leading-relaxed text-ink sm:text-base"
            >
              <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/70" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}
