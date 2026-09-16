import { useState } from 'react'
import type { Project } from '../data/profile'
import { projects } from '../data/profile'
import { cn } from '../lib/cn'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { BeakerIcon, CheckIcon, ChevronDownIcon } from './ui/icons'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 / projects"
      title="Featured QA work"
      description="Work from my QA and SDET roles, described at the level of approach rather than internals — no company data, repositories or client details."
      className="bg-canvas-soft/40"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 90} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-ink-dim">
        {/* Honest framing — the site shows method, not proprietary detail. */}
        Confidential company information, internal URLs, credentials and private repositories are
        deliberately left out.
      </p>
    </Section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-details`

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface/50 transition-all duration-300',
        open ? 'border-accent/30' : 'border-line hover:-translate-y-0.5 hover:border-line-strong',
      )}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-canvas-soft px-2.5 py-1 font-mono text-[11px] tracking-wider text-ink-dim">
            <BeakerIcon className="size-3.5 text-accent" />
            PRJ-{String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-[11px] text-ink-dim">{project.tagline}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-line bg-canvas-soft px-2 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div
          id={panelId}
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-400 ease-out',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <dl className="space-y-5 border-t border-line px-6 py-6">
              <DetailBlock term="Problem" value={project.problem} />
              <DetailBlock term="Approach" value={project.approach} />

              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">
                  Testing strategy
                </dt>
                <dd>
                  <ul className="mt-2.5 space-y-2">
                    {project.strategy.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>

              <DetailBlock term="Outcome" value={project.outcome} accent />
            </dl>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 border-t border-line px-6 py-4 text-sm font-medium text-ink-muted transition-colors hover:bg-surface hover:text-ink"
        >
          {open ? 'Hide case study' : 'Read the case study'}
          <ChevronDownIcon
            className={cn('size-4 transition-transform duration-300', open && 'rotate-180 text-accent')}
          />
        </button>
      </div>
    </article>
  )
}

function DetailBlock({ term, value, accent }: { term: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className="font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">{term}</dt>
      <dd
        className={cn(
          'mt-2 text-sm leading-relaxed',
          accent ? 'rounded-lg border border-accent/20 bg-accent/5 p-3 text-ink' : 'text-ink-muted',
        )}
      >
        {value}
      </dd>
    </div>
  )
}
