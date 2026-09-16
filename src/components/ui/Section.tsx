import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  /** Small monospace label shown above the title, e.g. "02 / experience". */
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

/** Consistent page section: anchor target, heading block, and content slot. */
export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28', className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
            <h2
              id={`${id}-heading`}
              className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{description}</p>
            )}
          </div>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
