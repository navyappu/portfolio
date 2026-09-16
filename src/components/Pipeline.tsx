import { Reveal } from './ui/Reveal'
import { CheckIcon } from './ui/icons'

const stages = [
  { name: 'Commit', note: 'branch pushed' },
  { name: 'Build', note: 'artifact ready' },
  { name: 'Automated E2E', note: 'playwright suite' },
  { name: 'API validation', note: 'contract checks' },
  { name: 'Staging QA', note: 'manual + checklist' },
  { name: 'Release', note: 'acceptance verified' },
]

/** Decorative band: the path a change takes before it reaches a user. */
export function Pipeline() {
  return (
    <div className="border-y border-line bg-canvas-soft/60 px-5 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-dim uppercase">
            How a change reaches a user
          </p>
        </Reveal>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map((stage, index) => (
            <Reveal as="li" key={stage.name} delay={index * 70}>
              <div className="group relative flex h-full items-start gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3.5 transition-colors hover:border-accent/30">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <CheckIcon className="size-3 text-accent" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-ink">{stage.name}</span>
                  <span className="block font-mono text-[11px] text-ink-dim">{stage.note}</span>
                </span>

                {/* Connector to the next stage, on wide screens only */}
                {index < stages.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-3 hidden h-px w-3 bg-line-strong lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  )
}
