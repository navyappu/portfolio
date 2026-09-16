import { about, links, profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { CheckIcon } from './ui/icons'

const quickFacts = [
  { label: 'Focus', value: 'Quality Engineering' },
  { label: 'Automation', value: 'Playwright · TypeScript' },
  { label: 'Education', value: 'BE, Information Science' },
  { label: 'Based in', value: 'Mangalore, India' },
]

export function About() {
  return (
    <Section id="about" eyebrow="01 / about" title="The bug you ship is the one you never looked for.">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed font-medium text-balance text-ink sm:text-2xl">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-6 space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={80 * (index + 1)}>
                <p className="leading-relaxed text-ink-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={70 * index}>
                <article className="group h-full rounded-xl border border-line bg-surface/50 p-5 transition-colors hover:border-accent/30 hover:bg-surface">
                  <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ink">
                    <CheckIcon className="size-4 shrink-0 text-accent" />
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface/50">
            <PortraitSlot />
            <dl className="divide-y divide-line">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                  <dt className="font-mono text-[11px] tracking-[0.14em] text-ink-dim uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/**
 * Shows the photo at `links.photoUrl` when one is set, and a monogram
 * placeholder until then — see README for how to add the image.
 */
function PortraitSlot() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  if (links.photoUrl) {
    return (
      <img
        src={links.photoUrl}
        alt={`${profile.name}, ${profile.role}`}
        loading="lazy"
        decoding="async"
        className="aspect-square w-full object-cover"
      />
    )
  }

  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-canvas-soft">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-info/10"
        aria-hidden
      />
      <div className="relative text-center">
        <span className="font-mono text-5xl font-semibold tracking-tight text-ink/80">
          {initials}
        </span>
        <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-ink-dim uppercase">
          add /profile.jpg
        </p>
      </div>
    </div>
  )
}
