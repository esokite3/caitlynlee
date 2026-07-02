import type { WorkItem } from './types'

/**
 * Professional experience — sourced verbatim from the resume.
 * Bullet text is intentionally unedited; the modal displays `description` only.
 */
export const experiences: WorkItem[] = [
  {
    id: 'sdsc',
    kind: 'experience',
    title: 'Software Engineering Intern',
    company: 'San Diego Supercomputer Center',
    dates: 'Jun 2026 – Present',
    description: [
      'Serving as Product Owner and developer for a job tracker application, leading design direction and feature prioritization to develop end-to-end product ownership skills.',
      'Developing a full-stack application with a React/TypeScript frontend and Python/PostgreSQL backend, following Agile workflows with daily syncs and Git-based version control.',
    ],
    rotation: -3,
  },
  {
    id: 'ucsd-research',
    kind: 'experience',
    title: 'Research Assistant',
    company: 'ESB AI Lab',
    companyNote: 'founded from UC San Diego CSE Department research',
    dates: 'Jun 2025 – Jun 2026',
    description: [
      'Built and maintained data pipelines for a 1,000+ image dataset, organizing files and structuring metadata to support future ML model development.',
      'Led a student research team, coordinating task assignments and communicating progress to faculty stakeholders in a collaborative, fast-paced research environment.',
    ],
    rotation: 2.5,
  },
  {
    id: 'basta-google',
    kind: 'experience',
    title: 'Software Engineering Program Participant',
    company: 'BASTA x Google',
    dates: 'Jul 2025 – Sep 2025',
    description: [
      'Selected from 2,600+ applications (top ~8%) for a 10-week mentorship with a Google Software Engineer focused on algorithms, optimization, and software engineering best practices through weekly challenges and structured review.',
    ],
    rotation: 3,
  },
  {
    id: 'ksdt',
    kind: 'experience',
    title: 'Sports Marketing Director',
    company: 'KSDT Sports',
    dates: 'Jan 2025 – Present',
    description: [
      'Led creative and operational sports marketing efforts, producing graphics, short-form videos, and edited interviews while directing in-game marketing initiatives, driving 500K+ engagements and 68% audience growth.',
    ],
    rotation: -2,
  },
]
