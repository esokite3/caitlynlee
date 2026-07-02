import type { AboutEntry } from './types'

/**
 * Bio copy from the Figma. The word wrapped in {{highlight}} is rendered in
 * the primary blue accent by the component.
 */
export const bio = {
  highlight: 'Caitlyn',
  text: `Hi, my name is {{highlight}}, and I'm a fourth-year student at UC San Diego studying Computer Science and Business Analytics. I come from an arts background (visual & performing), and I love expressing my creativity through my efforts as the Director of Sports Marketing at KSDT Sports.`,
}

/** Right-column EXPERIENCE list on the About page (recruiter-skimmable). */
export const aboutExperience: AboutEntry[] = [
  { id: 'sdsc', org: 'SDSC', role: 'Software Engineering Intern', dates: 'Jun 2026 – Present' },
  {
    id: 'esb',
    org: 'ESB AI Lab',
    orgNote: 'founded from UC San Diego CSE Department research',
    role: 'Research Assistant',
    dates: 'Jun 2025 – Jun 2026',
  },
  {
    id: 'basta',
    org: 'BASTA x Google',
    role: 'Software Engineering Program Participant',
    dates: 'Jul 2025 – Sep 2025',
  },
  { id: 'ksdt', org: 'KSDT Sports', role: 'Sports Marketing Director', dates: 'Jan 2025 – Present' },
]

/** Right-column INVOLVEMENTS list on the About page. */
export const aboutInvolvements: AboutEntry[] = [
  { id: 'edge', org: 'EDGE @ UCSD', role: 'PR/Marketing Chair', dates: 'Sep 2025 – Jun 2026' },
  { id: 'wic', org: 'Women in Computing', role: 'Active Member', dates: 'Sep 2023 – Present' },
  {
    id: 'swe',
    org: 'Society of Women Engineers',
    role: 'Active Member',
    dates: 'Sep 2023 – Present',
  },
]

/** Education, surfaced for recruiters. */
export const education = {
  school: 'University of California, San Diego',
  degree: 'B.S. Computer Science, Minor in Business Analytics',
  dates: 'Sep 2023 – Jun 2027',
} as const
