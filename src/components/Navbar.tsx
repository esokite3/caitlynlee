import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { brand, navLinks } from '../data/navigation'
import { socials } from '../data/socials'
import { durations } from '../lib/motion'

/**
 * Fixed top navigation. Left: the wordmark (returns Home). Right: page links
 * and monochrome social icons, all in the site primary color.
 */
export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-paper/80 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2.5 sm:px-10 sm:py-3.5"
      >
        {/* Wordmark */}
        <Link
          to="/"
          className="group flex flex-col leading-none no-underline sm:flex-row sm:items-center sm:gap-3"
          aria-label={`${brand.name} — home`}
        >
          <span className="font-sans text-lg font-extrabold tracking-tight text-primary sm:text-[2rem]">
            {brand.name}
          </span>
          <span className="mt-0.5 hidden text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-primary xs:block sm:mt-0 sm:text-xs">
            {(() => {
              const [line1, line2] = brand.subtitle.split(' @ ')
              return (
                <>
                  {line1}
                  <br />@ {line2}
                </>
              )
            })()}
          </span>
        </Link>

        {/* Links + socials */}
        <div className="flex items-center gap-4 sm:gap-8">
          <ul className="flex flex-col gap-0.5 text-right">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="font-sans text-sm font-extrabold uppercase tracking-wide text-primary no-underline transition-opacity duration-200 hover:opacity-70 aria-[current=page]:underline aria-[current=page]:underline-offset-4 sm:text-lg"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-2.5 sm:gap-4">
            {socials.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <motion.a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  aria-label={label}
                  className="inline-flex text-primary [&_svg]:h-[22px] [&_svg]:w-[22px] sm:[&_svg]:h-[26px] sm:[&_svg]:w-[26px]"
                  whileHover={{ y: -3, opacity: 0.75 }}
                  transition={{ duration: durations.fast, ease: 'easeOut' }}
                >
                  <Icon strokeWidth={2} aria-hidden />
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
