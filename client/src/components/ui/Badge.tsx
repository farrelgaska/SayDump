import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-surface border-border text-text-muted',
        happy: 'bg-accent-lime/10 border-accent-lime/20 text-accent-lime',
        sad: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple',
        excited: 'bg-accent-pink/10 border-accent-pink/20 text-accent-pink',
        angry: 'bg-rose-500/10 border-rose-500/20 text-rose-450',
        neutral: 'bg-surface border-border text-text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
