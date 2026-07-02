import Polaroid from './Polaroid'

/**
 * The Home page's large sticky note: a solid Post-it with the portrait pinned
 * to its upper-left edge (hanging slightly off the paper) and a handwritten
 * welcome. Intentionally static — no hover or click interaction.
 */
export default function HomeNote() {
  return (
    <div className="relative aspect-square w-[min(78vw,440px)] bg-sticky shadow-note">
      {/* Portrait pinned to the middle of the left edge, hanging slightly off it */}
      <div className="absolute left-[-5%] top-[40%] w-[44%] -translate-y-1/2">
        <Polaroid />
      </div>

      {/* Handwritten welcome, bottom-right */}
      <p className="absolute bottom-[9%] right-[7%] text-right font-shabby text-4xl leading-[1.08] text-ink sm:text-5xl">
        Welcome to
        <br />
        my portfolio!
      </p>
    </div>
  )
}
