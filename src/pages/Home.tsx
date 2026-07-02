import PageLayout from '../components/PageLayout'
import PageTransition from '../components/PageTransition'
import HomeNote from '../components/HomeNote'

export default function Home() {
  return (
    <PageTransition>
      <PageLayout mainClassName="flex items-center justify-center pb-10">
        <HomeNote />
      </PageLayout>
    </PageTransition>
  )
}
