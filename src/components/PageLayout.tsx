import type { ReactNode } from 'react'

/**
 * Per-page <main> wrapper. The persistent Navbar/Footer live in App so they
 * don't animate on route changes; this just sets the content column and the
 * top offset that clears the fixed navbar.
 */
export default function PageLayout({
  children,
  mainClassName = '',
}: {
  children: ReactNode
  mainClassName?: string
}) {
  return (
    <main
      id="main"
      className={`mx-auto w-full max-w-[1280px] flex-1 px-6 pt-24 sm:px-10 sm:pt-28 ${mainClassName}`}
    >
      {children}
    </main>
  )
}
