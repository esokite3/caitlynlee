import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import PageTransition from '../components/PageTransition'
import Bio from '../components/Bio'
import SkillList from '../components/SkillList'
import AboutSection from '../components/AboutSection'
import ExperienceCard from '../components/ExperienceCard'
import { aboutExperience, aboutInvolvements, education } from '../data/about'
import { settleContainer, settleItem } from '../lib/motion'

export default function About() {
  return (
    <PageTransition>
      <PageLayout mainClassName="pb-16">
        <h1 className="sr-only">About Caitlyn Lee</h1>

        <motion.div
          variants={settleContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-x-20 gap-y-14 lg:grid-cols-[1.05fr_1fr]"
        >
          {/* Left: bio + skills */}
          <motion.div variants={settleItem} className="flex flex-col gap-10">
            <Bio />
            <SkillList />
          </motion.div>

          {/* Right: experience, involvements, education */}
          <motion.div variants={settleItem} className="flex flex-col gap-12">
            <AboutSection title="Experience">
              {aboutExperience.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} />
              ))}
            </AboutSection>

            <AboutSection title="Involvements">
              {aboutInvolvements.map((entry) => (
                <ExperienceCard key={entry.id} entry={entry} />
              ))}
            </AboutSection>

            <AboutSection title="Education">
              <div className="flex items-baseline justify-between gap-4 py-4">
                <div>
                  <h3 className="font-sans text-lg font-bold text-ink sm:text-xl">
                    {education.school}
                  </h3>
                  <p className="font-sans text-sm text-ink/70 sm:text-[0.95rem]">
                    {education.degree}
                  </p>
                </div>
                <p className="shrink-0 text-right font-sans text-xs text-ink/70 sm:text-sm">
                  {education.dates}
                </p>
              </div>
            </AboutSection>
          </motion.div>
        </motion.div>
      </PageLayout>
    </PageTransition>
  )
}
