import { contact, links } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './ui/icons'

const channels = [
  {
    label: 'Email',
    value: links.email,
    href: `mailto:${links.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'See what I build',
    href: links.github,
    Icon: GitHubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute bottom-0 left-1/2 size-[36rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">06 / contact</p>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            <span className="text-gradient">{contact.heading}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {contact.text}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_-6px] hover:shadow-accent/60"
            >
              Send a message
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={links.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface/70 px-5 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-accent/40 hover:bg-surface-2"
            >
              <DownloadIcon className="size-4 text-accent" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon, external }, index) => (
            <Reveal as="li" key={label} delay={index * 80} className="h-full">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-surface/50 px-5 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line-strong bg-canvas-soft text-ink-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-dim uppercase">
                  {label}
                </span>
                <span className="text-sm break-all text-ink">{value}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
