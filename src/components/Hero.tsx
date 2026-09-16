import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../lib/cn'
import { Terminal } from './Terminal'
import { ArrowDownIcon, ArrowRightIcon, MailIcon, MapPinIcon } from './ui/icons'

const ROTATE_MS = 3600

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(
      () => setTaglineIndex((index) => (index + 1) % profile.taglines.length),
      ROTATE_MS,
    )
    return () => clearInterval(timer)
  }, [reduced])

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
      <HeroBackdrop />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase backdrop-blur">
            <MapPinIcon className="size-3.5 text-accent" />
            {profile.location}
          </p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
            <span className="text-gradient">{profile.taglines[0]}</span>
          </h1>

          <p className="mt-6 font-mono text-sm tracking-tight text-accent sm:text-base">
            {profile.subheadline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_-6px] hover:shadow-accent/60"
            >
              View My Work
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-accent/40 hover:bg-surface-2"
            >
              <MailIcon className="size-4 text-accent" />
              Contact Me
            </a>
          </div>

          {/* Rotating taglines — the headline stays put, these cycle underneath. */}
          <div className="mt-10 flex h-6 items-center gap-3 border-t border-line pt-8 sm:mt-12">
            <span className="font-mono text-[11px] tracking-[0.18em] text-ink-dim uppercase">
              motto
            </span>
            <div aria-live="off" className="relative h-6 flex-1 overflow-hidden">
              {profile.taglines.map((tagline, index) => (
                <span
                  key={tagline}
                  className={cn(
                    'absolute inset-0 flex items-center text-sm text-ink-muted transition-all duration-500 ease-out',
                    index === taglineIndex
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-3 opacity-0',
                  )}
                >
                  {tagline}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <Terminal />
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-6xl justify-center sm:mt-20">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="group flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface/60 text-ink-dim backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ArrowDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}

/** Grid, glows and a drifting scan line — quiet enough to read over. */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-[0.55]" />
      <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-32 -right-24 size-[28rem] rounded-full bg-info/10 blur-[110px]" />
      <div className="animate-float-slow absolute top-1/3 -left-24 size-[22rem] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  )
}
