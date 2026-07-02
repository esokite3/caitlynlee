import headshot from '../assets/headshot.jpg'
import paperclip from '../assets/paperclip.png'

/**
 * A black-and-white photo in a thin dark frame, held by a horizontal paperclip
 * clipped onto its top edge. Fills its container's width and keeps the portrait
 * aspect ratio, so it scales with the note it's pinned to.
 */
export default function Polaroid({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ rotate: '-8deg' }}>
      <div className="bg-[#1c1c1c] p-[3%] shadow-[0_12px_22px_rgba(0,0,0,0.28)]">
        <img
          src={headshot}
          alt="Portrait of Caitlyn Lee"
          width={642}
          height={800}
          loading="eager"
          decoding="async"
          className="block aspect-[210/264] w-full object-cover grayscale"
        />
      </div>

      {/* Real paperclip clipped onto the left edge of the photo */}
      <img
        src={paperclip}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-6 top-[60%] z-20 w-[70%] -translate-x-[42%] -translate-y-1/2 drop-shadow-[0_5px_6px_rgba(0,0,0,0.4)]"
      />
    </div>
  )
}
