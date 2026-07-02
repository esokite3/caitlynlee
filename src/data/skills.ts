import type { SkillGroup } from './types'

/**
 * The short, human "I can do…" list shown as text on the About page,
 * mirroring the Figma. Order matters — it matches the mockup.
 */
export const skillHighlights: string[] = [
  'Python',
  'React',
  'TypeScript',
  'SQL',
  'Java',
  'AWS',
  'Git',
  'Canva',
  'etc…',
]

/**
 * Full, categorized skill set from the resume. Drives the compact logo row
 * beneath the highlights and provides accessible grouping.
 */
export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C/C++'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'ML & Data Science',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    label: 'Developer Tools & Cloud',
    skills: ['Git', 'GitHub', 'AWS DynamoDB', 'REST APIs', 'Jupyter Notebook'],
  },
]
