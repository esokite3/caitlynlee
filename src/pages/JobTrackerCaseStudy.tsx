import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageTransition from '../components/PageTransition'
import CaseStudyImageCompare from '../components/CaseStudyImageCompare'
import { jobTrackerCaseStudy as cs } from '../data/jobTrackerCaseStudy'
import beforeImg from '../assets/case-studies/job-tracker/before.png'
import afterImg from '../assets/case-studies/job-tracker/after.png'

/** A labeled content beat: small uppercase eyebrow + heading + body. */
function Section({
  label,
  heading,
  children,
}: {
  label: string
  heading?: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-ink/10 pt-10">
      <div>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {label}
        </p>
        {heading && (
          <h2 className="mt-1 font-sans text-2xl font-extrabold text-ink sm:text-[1.75rem]">
            {heading}
          </h2>
        )}
      </div>
      <div className="max-w-[68ch] font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
        {children}
      </div>
    </section>
  )
}

/** Clean, editorial case-study layout, deliberately distinct from the sticky-note desk. */
export default function JobTrackerCaseStudy() {
  return (
    <PageTransition>
      <PageLayout mainClassName="pb-24">
        <article className="mx-auto flex max-w-[900px] flex-col gap-14">
          {/* 1. Header */}
          <header className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Case Study
              </p>
              <h1 className="font-sans text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
                {cs.title}
              </h1>
              <p className="max-w-[52ch] font-sans text-lg text-ink/80 sm:text-xl">{cs.hook}</p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink/10 py-6 sm:grid-cols-4">
              {cs.metadata.map(({ label, value }) => (
                <div key={label}>
                  <dt className="font-sans text-xs font-bold uppercase tracking-wide text-primary">
                    {label}
                  </dt>
                  <dd className="mt-1 font-sans text-sm leading-snug text-ink/90 sm:text-[0.95rem]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </header>

          {/* 2. Hero image: before/after */}
          <CaseStudyImageCompare
            beforeSrc={beforeImg}
            afterSrc={afterImg}
            beforeAlt="Original job tracker dashboard with a uniform soft yellow-green gradient across every card."
            afterAlt="Redesigned job tracker dashboard with clean white backgrounds and purposeful, high-contrast color."
          />

          {/* 3. Project Overview + Design Goal */}
          <div className="grid grid-cols-1 gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Project Overview
              </p>
              <p className="font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
                {cs.overview}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Design Goal
              </p>
              <p className="font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
                {cs.designGoal}
              </p>
            </div>
          </div>

          {/* 4. Problem Definition */}
          <Section label="Problem Definition">
            <p>{cs.problem}</p>
          </Section>

          {/* 5. Research Insights */}
          <Section label="Research Insights">
            <ol className="flex flex-col gap-4">
              {cs.researchInsights.map((point, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-sm font-bold text-paper"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{point}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* 6. Iteration & Prototyping */}
          <Section label="Iteration & Prototyping">
            <p>{cs.iteration}</p>
          </Section>

          {/* 7. Solution */}
          <Section label="Solution">
            <p>{cs.solution}</p>
            <figure className="mt-6 flex flex-col gap-2">
              <div className="overflow-hidden rounded-lg border border-ink/10 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <img
                  src={afterImg}
                  alt="Redesigned dashboard detail: green and orange bar charts, a pink Sankey diagram for application flow, and a green-scale activity heat map."
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-sans text-sm text-ink/60">
                Purposeful color coding across charts, the Sankey flow diagram, and the activity heat map.
              </figcaption>
            </figure>
          </Section>

          {/* 8. Outcome & Impact */}
          <Section label="Outcome & Impact">
            <p>{cs.outcome}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {cs.outcomeResults.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* 9. Next Iteration: A Feedback Loop for AI Parsing */}
          <Section label="Next Iteration" heading="A Feedback Loop for AI Parsing">
            <div className="flex flex-col gap-8">
              <p>{cs.nextIteration.context}</p>

              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs font-bold uppercase tracking-wide text-primary">
                  Design Questions
                </p>
                <ul className="flex flex-col gap-2">
                  {cs.nextIteration.designQuestions.map((question, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40"
                      />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-sans text-xs font-bold uppercase tracking-wide text-primary">
                  Proposed Direction
                </p>
                <p>{cs.nextIteration.proposedDirection}</p>
              </div>

              <p className="w-fit rounded-md border border-dashed border-ink/25 bg-ink/[0.03] px-4 py-3 font-sans text-sm italic text-ink/70">
                {cs.nextIteration.closingLine}
              </p>
            </div>
          </Section>

          {/* 10. Reflection */}
          <section className="border-t border-ink/10 pt-10">
            <blockquote className="max-w-[62ch] border-l-4 border-sticky-edge pl-6 font-sans text-lg italic leading-relaxed text-ink/90 sm:text-xl">
              {cs.reflection}
            </blockquote>
          </section>

          {/* 11. Link back */}
          <footer className="border-t border-ink/10 pt-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-primary underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
            >
              <ArrowLeft size={16} strokeWidth={2.4} aria-hidden />
              Back to other projects
            </Link>
          </footer>
        </article>
      </PageLayout>
    </PageTransition>
  )
}
