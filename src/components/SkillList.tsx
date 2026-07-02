import { skillHighlights } from '../data/skills'
import { skillLogos } from '../data/skillLogos'

/**
 * The "I can do…" block: the short handwritten-feeling text list from the
 * Figma, followed by a compact, evenly-sized row of official technology logos.
 */
export default function SkillList() {
  return (
    <div>
      <h2 className="font-sans text-xl font-extrabold text-primary sm:text-2xl">I can do…</h2>

      <ul className="mt-3 space-y-1">
        {skillHighlights.map((skill) => (
          <li key={skill} className="font-sans text-lg font-bold text-ink sm:text-xl">
            {skill}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex max-w-[22rem] flex-wrap items-center gap-x-5 gap-y-4">
        {skillLogos.map((logo) => (
          <li key={logo.name}>
            <img
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              width={30}
              height={30}
              loading="lazy"
              decoding="async"
              className="h-[30px] w-[30px] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
