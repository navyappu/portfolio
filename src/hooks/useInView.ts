import { useEffect, useRef, useState } from 'react'

type Options = {
  /** Fraction of the element that must be visible before it counts as in view. */
  threshold?: number
  /** Margin around the viewport, e.g. '0px 0px -10% 0px'. */
  rootMargin?: string
  /** Keep the "seen" state once triggered (default) or track visibility both ways. */
  once?: boolean
}

/**
 * Reports whether an element has entered the viewport.
 * Falls back to `true` when IntersectionObserver is unavailable so content
 * is never hidden from older browsers or non-JS rendering paths.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
