import { bio } from '../data/about'

/**
 * Renders the intro paragraph, coloring the {{highlight}} token (the name) in
 * the primary blue while the body stays dark ink.
 */
export default function Bio() {
  const [before, after] = bio.text.split('{{highlight}}')

  return (
    <p className="max-w-[34ch] font-sans text-2xl font-bold leading-snug text-ink sm:text-[1.75rem]">
      {before}
      <span className="text-primary">{bio.highlight}</span>
      {after}
    </p>
  )
}
