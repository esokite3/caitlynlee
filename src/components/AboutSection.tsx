import type { ReactNode } from 'react'

/**
 * A right-column section on the About page: a right-aligned primary-color
 * heading with an underline rule, followed by its rows.
 */
export default function AboutSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="w-full">
      <h2 className="text-right font-sans text-xl font-extrabold uppercase tracking-wide text-primary sm:text-2xl">
        {title}
      </h2>
      <div className="mt-2 border-t border-ink/20" />
      <div className="divide-y divide-ink/10">{children}</div>
    </section>
  )
}
