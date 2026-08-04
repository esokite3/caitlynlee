/**
 * Copy for the Job Tracker case-study page. Kept separate from the page
 * component so edits never require touching layout/JSX.
 */
export const jobTrackerCaseStudy = {
  title: 'Job Tracker: From Sterile Gradient to a Warmer, Accessible UI',
  hook: 'A small color decision that taught me the difference between polished and personal.',

  metadata: [
    { label: 'Skills', value: 'Figma, React, Accessibility (ARIA), UI Design' },
    { label: 'Duration', value: '1 sprint (2 weeks)' },
    { label: 'Role', value: 'Product Owner & Developer' },
    { label: 'Team', value: 'San Diego Supercomputer Center (SDSC)' },
  ],

  overview:
    'As Product Owner and developer for a job tracker application at SDSC, I designed and built the dashboard from scratch, including its original visual direction, a soft lavender and neon yellow gradient across every card and background.',

  designGoal:
    "Make the interface feel warm and personal, since it's a tool people return to daily to manage their job search, while improving accessibility.",

  problem:
    'The original dashboard used a consistent gradient treatment across every element. It looked clean in Figma, but once implemented and running, it felt cold and impersonal like enterprise software than something built for a daily, personal task like job hunting.',

  researchInsights: [
    'Once built and running, the gradient read as sterile rather than warm or approachable, highlighting a gap between how it looked in a static mockup versus a live, interactive product.',
    'A playtest with peers, starting with open-ended impressions and then guided toward contrast specifically, confirmed the issue was twofold: an emotional/aesthetic problem (cold, corporate) and a genuine accessibility gap (insufficient contrast).',
    "The gradient's uniformity across every data type (charts, calendars, notifications) flattened visual hierarchy, making it harder to distinguish between different kinds of content at a glance.",
  ],

  iteration:
    "I built the initial dashboard in Figma with most core pages mocked up (weekly stats, recent months chart, notifications, calendar, and application tracking) all unified under the original gradient. After noticing the sterile feel in the built version, I put together new color options and brought them to peers and the team for feedback, discussing and brainstorming ways to keep the interface colorful and personal without it reading as flat or corporate. Landed on a few key changes: higher contrast that followed ARIA accessibility guidelines more closely, a warmer and more varied palette (distinct greens, oranges, and pinks) used purposefully across different chart and content types instead of one dominant wash, and a gradient that shifts with the time of day so the dashboard still feels alive and personal each time someone opens it.",

  solution:
    'The new design replaces the flat gradient with clean white backgrounds and purposeful color: green and orange bar charts, a pink/red Sankey diagram for application flow, a green heat map for activity. Contrast is stronger, text is easier to read, and each data type now has its own visual identity.',

  outcome:
    'The new color scheme has been merged into the main branch and is live in the application.',
  outcomeResults: [
    'Improved contrast for better ARIA accessibility compliance',
    'Introduced distinct, purposeful color coding across data types instead of one uniform gradient',
    'Addressed both an emotional read (cold vs. personal) and a genuine accessibility gap, informed directly by user playtesting',
  ],

  nextIteration: {
    context:
      "The MVP auto-parses job postings (title, company, location) after a scheduled LLM job reads a user's emails to identify which ones relate to a job application. Parsing isn't always perfect, and right now there's no way for users to correct it, or for the system to improve from that feedback.",
    designQuestions: [
      'How should low-confidence extractions be surfaced to the user?',
      'What should the correction interaction feel like: fast and inline, not a form?',
      'How do you collect feedback without fatiguing the user?',
      "What's the incentive for a user to bother correcting it?",
      'Where is the line between AI auto-filling silently vs. requiring confirmation?',
    ],
    proposedDirection:
      'Low-confidence fields would be subtly flagged. Tapping one would let a user edit inline, with the correction feeding directly back into future parsing for their own postings.',
    closingLine:
      "This is a concept in progress. It hasn't been built or tested yet, but it's the direction I'd take the feature next.",
  },

  reflection:
    "This project taught me that a design can succeed in a static mockup and still fail once it's live and something people actually use daily. Catching that gap early, through real playtesting rather than assumption, made the fix sharper and more defensible. It also reminded me that good product thinking doesn't stop at what shipped: noticing the next rough edge, like imperfect parsing, and reasoning through how to fix it is part of the same job.",
} as const
