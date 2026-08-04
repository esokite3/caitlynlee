/**
 * Shared data-layer types.
 *
 * Every page renders from these structures — adding a new experience, project,
 * skill, or link should only ever require editing a file in /data, never a
 * component.
 */

export type WorkKind = 'experience' | 'project'

/**
 * A single sticky note on the Work page. `title` and `company` render on the
 * note face as `title @ company`; only `description` appears in the modal.
 */
export interface WorkItem {
  /** Stable id, used for routing/animation keys. */
  id: string
  kind: WorkKind
  /** Role (experience) or project name (project). */
  title: string
  /** Company / program / course context. */
  company: string
  /** Optional smaller sub-line under the company (e.g. an org's origin note). */
  companyNote?: string
  /** Human-readable date range, e.g. "Jun 2026 – Present". */
  dates: string
  /** Resume bullet points, shown only inside the opened modal. */
  description: string[]
  /** Optional external link (projects). */
  link?: string
  /** Optional in-site route to a full case-study page, linked from the modal. */
  caseStudyPath?: string
  /** Resting rotation in degrees for the natural desk look. */
  rotation: number
}

/** Compact experience/involvement row on the About page. */
export interface AboutEntry {
  id: string
  /** Short organization label, e.g. "SDSC". */
  org: string
  /** Optional smaller sub-line under the org (e.g. an org's origin note). */
  orgNote?: string
  /** Role / membership. */
  role: string
  dates: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

/** A technology with an associated local SVG logo, for the About logo row. */
export interface SkillLogo {
  name: string
  /** Imported SVG asset URL. */
  src: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  /** Lucide icon name is resolved in the component; kept out of data. */
}

export interface NavLink {
  label: string
  to: string
}
