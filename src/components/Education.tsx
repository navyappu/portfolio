import { education } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { GraduationIcon } from './ui/icons'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 / education"
      title="Foundations"
      description="An engineering degree, plus the projects where I first learned that software fails in ways nobody planned for."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <Reveal>
          <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 p-7">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 size-56 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <GraduationIcon className="size-5" />
              </span>

              <h3 className="mt-5 text-xl leading-snug font-semibold tracking-tight text-balance text-ink">
                {education.degree}
              </h3>

              <dl className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-canvas-soft px-4 py-3">
                  <dt className="font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase">
                    Year
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">{education.year}</dd>
                </div>
                <div className="rounded-xl border border-line bg-canvas-soft px-4 py-3">
                  <dt className="font-mono text-[10px] tracking-[0.16em] text-ink-dim uppercase">
                    CGPA
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-accent">{education.cgpa}</dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-accent/30 hover:bg-surface">
                <h4 className="text-[15px] font-semibold text-ink">{highlight.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {highlight.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {highlight.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-canvas-soft px-2 py-0.5 font-mono text-[10px] text-ink-dim"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
