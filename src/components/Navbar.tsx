import { useEffect, useState } from 'react'
import { links, navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/cn'
import { CloseIcon, DownloadIcon, MenuIcon } from './ui/icons'

const sectionIds = navItems.map((item) => item.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile menu and allow Escape to close it.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="text-[15px] font-semibold tracking-tight text-ink">{profile.name}</span>
          <span className="rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-accent">
            {profile.badge}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm transition-colors',
                    active === id ? 'text-ink' : 'text-ink-muted hover:text-ink',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300',
                      active === id ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:bg-surface-2 sm:inline-flex"
          >
            <DownloadIcon className="size-4" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line-strong bg-surface text-ink transition-colors hover:bg-surface-2 md:hidden"
          >
            {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line bg-canvas/95 backdrop-blur-xl md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={links.resumeUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-3 py-3 text-base font-medium text-ink"
            >
              <DownloadIcon className="size-4" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
