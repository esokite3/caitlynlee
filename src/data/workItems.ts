import type { WorkItem } from './types'
import { experiences } from './experiences'
import { projects } from './projects'

/**
 * The full ordered set of Work-page sticky notes: experiences first, then
 * projects. The Work grid renders directly from this list, so adding a note is
 * a one-line change in experiences.ts or projects.ts.
 */
export const workItems: WorkItem[] = [...experiences, ...projects]
