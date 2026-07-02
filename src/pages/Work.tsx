import { AnimatePresence } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import PageTransition from '../components/PageTransition'
import StickyGrid from '../components/StickyGrid'
import StickyModal from '../components/StickyModal'
import { workItems } from '../data/workItems'
import { useModal } from '../hooks/useModal'
import type { WorkItem } from '../data/types'

export default function Work() {
  const modal = useModal<WorkItem>()

  return (
    <PageTransition>
      <PageLayout>
        <h1 className="sr-only">Work</h1>
        <StickyGrid items={workItems} activeId={modal.active?.id ?? null} onOpen={modal.open} />

        <AnimatePresence>
          {modal.active && <StickyModal item={modal.active} onClose={modal.close} />}
        </AnimatePresence>
      </PageLayout>
    </PageTransition>
  )
}
