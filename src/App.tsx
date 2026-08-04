import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import JobTrackerCaseStudy from './pages/JobTrackerCaseStudy'

/** Resets scroll position on route change. */
function useScrollToTop(pathname: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
}

export default function App() {
  const location = useLocation()
  useScrollToTop(location.pathname)

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only rounded bg-primary px-4 py-2 font-sans font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies/job-tracker" element={<JobTrackerCaseStudy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
