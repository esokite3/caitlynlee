import type { AboutEntry } from '../data/types'

/**
 * One recruiter-skimmable row: organization on the left, role and dates on the
 * right. Used for both the Experience and Involvements lists.
 */
export default function ExperienceCard({ entry }: { entry: AboutEntry }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-4">
      <div className="min-w-0">
        <h3 className="font-sans text-lg font-bold text-ink sm:text-xl">{entry.org}</h3>
        {entry.orgNote && (
          <p className="font-sans text-xs italic text-ink/55 sm:text-sm">{entry.orgNote}</p>
        )}
      </div>
      <div className="shrink-0 text-right">
        <p className="font-sans text-sm font-semibold text-ink sm:text-[0.95rem]">{entry.role}</p>
        <p className="font-sans text-xs text-ink/70 sm:text-sm">{entry.dates}</p>
      </div>
    </div>
  )
}
