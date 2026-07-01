import React, { forwardRef } from 'react'
import { cn } from '../../lib/cn'

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl p-5 border border-border bg-surface text-text-primary shadow-lg',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export { Card }
