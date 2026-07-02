import type { LucideIcon } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react'

export interface Social {
  id: string
  label: string
  href: string
  icon: LucideIcon
}

/**
 * Social / contact links rendered as monochrome icons in the navbar.
 * All use the site primary color (#0B4BAF) — never brand colors.
 */
export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/esokite3',
    icon: Github,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:leecaitlyn33@gmail.com',
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/caitlyn-lee3',
    icon: Linkedin,
  },
]
