import { type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import type { WorkItem } from '../data/types'
import { EASE, durations, settleContainer, settleItem } from '../lib/motion'

/** Small per-column vertical offsets for a natural, scattered desk layout. */
const OFFSETS = [0, 22, 10, 16]

function WorkNote({
  item,
  index,
  isActive,
  onOpen,
}: {
  item: WorkItem
  index: number
  isActive: boolean
  onOpen: (item: WorkItem) => void
}) {
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(item)
    }
  }

  return (
    <motion.div
      variants={settleItem}
      className="flex justify-center"
      style={{ marginTop: OFFSETS[index % OFFSETS.length] }}
    >
      <motion.div
        layoutId={`note-${item.id}`}
        role="button"
        tabIndex={0}
        aria-label={`${item.title} at ${item.company}. Activate to read details.`}
        onClick={() => onOpen(item)}
        onKeyDown={onKeyDown}
        className="relative flex aspect-square w-full max-w-[240px] cursor-pointer items-center justify-center bg-sticky p-5 text-center"
        initial="rest"
        animate={isActive ? 'active' : 'rest'}
        whileHover="lift"
        whileFocus="lift"
        variants={{
          rest: {
            y: 0,
            opacity: 1,
            rotate: item.rotation,
            boxShadow: '0 6px 14px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
          },
          lift: {
            y: -6,
            rotate: item.rotation,
            boxShadow: '0 16px 30px rgba(0,0,0,0.18), 0 6px 10px rgba(0,0,0,0.10)',
          },
          // While the modal for this note is open, hide the source note.
          active: { opacity: 0, rotate: item.rotation },
        }}
        transition={{ duration: durations.base, ease: EASE }}
      >
        <span className="flex flex-col items-center gap-1 font-biro leading-tight text-ink">
          <span className="text-lg sm:text-xl">
            {item.kind === 'experience' ? `${item.title} @ ${item.company}` : item.title}
          </span>
          {item.kind === 'project' && (
            <span className="text-base text-ink/80 sm:text-lg">{item.company}</span>
          )}
          {item.companyNote && (
            <span className="text-sm leading-snug text-ink/70">({item.companyNote})</span>
          )}
        </span>
      </motion.div>
    </motion.div>
  )
}

/**
 * Responsive, gently scattered grid of Work sticky notes. On desktop all seven
 * fit in two rows (4 + 3) without scrolling. Notes settle in on mount and open
 * into the modal on click.
 */
export default function StickyGrid({
  items,
  activeId,
  onOpen,
}: {
  items: WorkItem[]
  activeId: string | null
  onOpen: (item: WorkItem) => void
}) {
  return (
    <motion.div
      className="mx-auto grid max-w-[1120px] grid-cols-1 gap-x-8 gap-y-8 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      variants={settleContainer}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <WorkNote
          key={item.id}
          item={item}
          index={index}
          isActive={activeId === item.id}
          onOpen={onOpen}
        />
      ))}
    </motion.div>
  )
}
