import React, { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-accent-lime text-background hover:opacity-95 shadow-md shadow-accent-lime/10',
        secondary: 'bg-surface border border-border text-text-primary hover:bg-surface-hover',
        ghost: 'text-text-muted hover:bg-surface-hover hover:text-text-primary',
        danger: 'bg-accent-pink/10 border border-accent-pink/20 text-accent-pink hover:bg-accent-pink/20',
        purple: 'bg-accent-purple text-text-primary hover:opacity-95 shadow-md shadow-accent-purple/10',
      },
      size: {
        sm: 'h-8 px-3 rounded-lg',
        md: 'h-10 px-4',
        lg: 'h-11 px-6 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
