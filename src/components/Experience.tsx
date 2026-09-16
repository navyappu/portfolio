import { useState } from 'react'
import { experience } from '../data/profile'
import { cn } from '../lib/cn'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { ChevronDownIcon } from './ui/icons'

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      id="experience"
      eyebrow="02 / experience"
      title="Where I've tested"
      description="Roles across QA and test automation — the responsibilities below are the work itself, not a job description."
      className="bg-canvas-soft/40"
    >
      <ol className="relative space-y-5">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[19px] hidden w-px bg-gradient-to-b from-accent/40 via-line-strong to-transparent md:block"
        />

        {experience.map((job, index) => {
          const open = openIndex === index
          const panelId = `experience-panel-${index}`

          return (
            <Reveal as="li" key={job.company} delay={index * 90} className="relative md:pl-14">
              <span aria-hidden className="absolute top-7 left-3 hidden md:block">
                <span
                  className={cn(
                    'relative block size-3.5 rounded-full border-2',
                    job.current
                      ? 'border-accent bg-accent/30'
                      : 'border-line-strong bg-canvas-soft',
                  )}
                >
                  {job.current && (
                    <span className="animate-pulse-ring absolute inset-0 rounded-full bg-accent/40" />
                  )}
                </span>
              </span>

              <article
                className={cn(
                  'overflow-hidden rounded-2xl border bg-surface/50 transition-colors',
                  open ? 'border-accent/30' : 'border-line hover:border-line-strong',
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-lg font-semibold tracking-tight text-ink">
                          {job.company}
                        </span>
                        {job.current && (
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
                            current
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block text-sm text-accent">{job.role}</span>
                      <span className="mt-0.5 block font-mono text-xs text-ink-dim">
                        {job.period}
                      </span>
                      <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-ink-muted">
                        {job.summary}
                      </span>
                    </span>
                    <ChevronDownIcon
                      className={cn(
                        'mt-1 size-5 shrink-0 text-ink-dim transition-transform duration-300',
                        open && 'rotate-180 text-accent',
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={cn(
                    'grid transition-[grid-template-rows,opacity] duration-400 ease-out',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-line px-5 pt-5 pb-6 sm:px-6">
                      <p className="font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">
                        Responsibilities
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
                            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md border border-line-strong bg-canvas-soft px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
