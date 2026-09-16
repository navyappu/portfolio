import { skillGroups } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 / skills"
      title="The toolkit"
      description="What I reach for depends on the risk. Manual exploration finds the unknown; automation holds the line once it's known."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 90}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-accent/30 hover:bg-surface">
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <header className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
                <span className="font-mono text-[11px] text-ink-dim">
                  {String(group.skills.length).padStart(2, '0')}
                </span>
              </header>
              <p className="mt-1 text-xs text-ink-dim">{group.hint}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line-strong bg-canvas-soft px-2.5 py-1.5 text-[13px] text-ink-muted transition-colors duration-200 hover:border-accent/40 hover:text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
