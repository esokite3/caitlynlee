import type { WorkItem } from './types'

/**
 * Projects — sourced verbatim from the resume. Links point to live demos or
 * source repositories.
 */
export const projects: WorkItem[] = [
  {
    id: 'educational-game',
    kind: 'project',
    title: 'Educational Game Project',
    company: 'CSE 110 @ UCSD',
    dates: 'Sep 2025 – Present',
    link: 'https://github.com/CSE110-Coblenz/cse-110-project-team-31',
    description: [
      'Collaborated in a 6-person cross-functional team using Agile workflows to build a full-stack TypeScript application.',
      'Implemented core simulation systems with sale/expense tracking logic, applying algorithmic thinking and modular OOP design to solve complex product problems.',
    ],
    rotation: 2,
  },
  {
    id: 'clippers-tracker',
    kind: 'project',
    title: 'Clippers Stats Tracker',
    company: 'Personal Project',
    dates: 'Jul 2025 – Present',
    link: 'https://clips-stats-tracker.vercel.app',
    description: [
      'Built a full-stack application (React + Spring Boot + AWS DynamoDB) to aggregate, store, and surface NBA performance data.',
    ],
    rotation: -2.5,
  },
  {
    id: 'bikeshare',
    kind: 'project',
    title: 'Bikeshare Data Analysis',
    company: 'COGS 108 @ UCSD',
    dates: 'Sep 2024 – Dec 2024',
    link: 'https://github.com/esokite3/COGS108Project',
    description: [
      'Explored and analyzed ~1M bike share records using Python (Pandas, NumPy, Scikit-learn) to identify behavioral patterns and trends in ridership data, applying EDA, feature engineering, and OLS regression to surface key engagement drivers.',
      'Presented findings and actionable recommendations to stakeholders through structured reports and visualizations.',
    ],
    rotation: 3,
  },
]
