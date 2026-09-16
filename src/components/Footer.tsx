import { links, profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui/icons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold text-ink">{profile.name}</span>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-accent">
              {profile.badge}
            </span>
          </div>
          <p className="font-mono text-xs text-ink-dim">
            © {year} — built with React, TypeScript & Tailwind
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface/50 text-ink-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            <MailIcon className="size-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface/50 text-ink-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface/50 text-ink-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            <GitHubIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
