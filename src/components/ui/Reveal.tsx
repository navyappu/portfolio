import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds, for lists of cards. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const Tag = as

  // Callback ref keeps the element type open across the polymorphic `as` prop.
  const attachRef = (node: HTMLElement | null) => {
    ref.current = node
  }

  return (
    <Tag
      ref={attachRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 motion-reduce:opacity-100',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
