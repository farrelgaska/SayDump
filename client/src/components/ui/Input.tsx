import React, { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-xl bg-surface border border-border text-xs px-3 py-2 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-purple/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
            error && 'border-accent-pink/50 focus:border-accent-pink',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-[10px] text-accent-pink mt-1 block font-medium">{error}</span>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
