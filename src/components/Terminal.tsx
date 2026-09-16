import { useEffect, useState } from 'react'
import { terminalScript } from '../data/profile'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { cn } from '../lib/cn'
import { CheckIcon } from './ui/icons'

const TYPE_MS = 55
const LINE_MS = 420
const RESTART_MS = 5200

const command = terminalScript[0].text
const passCount = terminalScript.filter((line) => line.type === 'pass').length

/**
 * Hero centrepiece: a small terminal that types out a test run and passes.
 * Animated content is hidden from assistive tech; a static summary stands in.
 */
export function Terminal() {
  const reduced = usePrefersReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (reduced) return

    if (lineIndex === 0) {
      if (typed.length < command.length) {
        const timer = setTimeout(() => setTyped(command.slice(0, typed.length + 1)), TYPE_MS)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => setLineIndex(1), 520)
      return () => clearTimeout(timer)
    }

    if (lineIndex < terminalScript.length) {
      const timer = setTimeout(() => setLineIndex((index) => index + 1), LINE_MS)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setLineIndex(0)
      setTyped('')
    }, RESTART_MS)
    return () => clearTimeout(timer)
  }, [lineIndex, typed, reduced])

  const shown = reduced ? terminalScript.length : lineIndex
  const commandText = reduced ? command : typed
  const finished = shown >= terminalScript.length

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-info/20 opacity-60 blur-md"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-canvas-soft/95 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-3 border-b border-line bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="font-mono text-[11px] tracking-wide text-ink-dim">bash — test:e2e</p>
          <span
            className={cn(
              'ml-auto flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase transition-colors',
              finished
                ? 'border-accent/30 bg-accent/10 text-accent'
                : 'border-line-strong bg-surface text-ink-dim',
            )}
          >
            <span
              className={cn(
                'size-1.5 rounded-full',
                finished ? 'bg-accent' : 'animate-pulse bg-ink-dim',
              )}
            />
            {finished ? 'passed' : 'running'}
          </span>
        </div>

        <div
          aria-hidden
          className="min-h-[248px] space-y-1.5 px-4 py-4 font-mono text-[13px] leading-relaxed sm:min-h-[264px] sm:text-sm"
        >
          <p className="text-ink">
            <span className="text-accent">$</span> <span>{commandText}</span>
            {!reduced && shown === 0 && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-caret bg-accent" />
            )}
          </p>

          {terminalScript.slice(1).map((line, index) =>
            shown > index + 1 ? (
              line.type === 'summary' ? (
                <p key={line.text} className="pt-2 text-accent">
                  {line.text}
                </p>
              ) : (
                <p key={line.text} className="flex items-center gap-2 text-ink-muted">
                  <CheckIcon className="size-3.5 shrink-0 text-accent" />
                  <span>{line.text}</span>
                </p>
              )
            ) : null,
          )}

          {finished && (
            <p className="pt-1 text-ink-dim">
              {passCount} passed <span className="text-line-strong">·</span> 0 failed
            </p>
          )}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <p className="sr-only">
        A terminal running the end-to-end test suite: authentication tests, dashboard tests, API
        validation and the regression suite all pass.
      </p>
    </div>
  )
}
