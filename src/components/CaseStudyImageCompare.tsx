/**
 * Side-by-side before/after image pair for case-study story beats. Stacks
 * vertically on small screens.
 */
export default function CaseStudyImageCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {[
        { src: beforeSrc, alt: beforeAlt, label: 'Before' },
        { src: afterSrc, alt: afterAlt, label: 'After' },
      ].map(({ src, alt, label }) => (
        <figure key={label} className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-lg border border-ink/10 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <img src={src} alt={alt} className="w-full" loading="lazy" />
          </div>
          <figcaption className="font-sans text-xs font-bold uppercase tracking-wide text-primary">
            {label}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
