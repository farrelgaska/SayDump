import React, { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-xl bg-surface border border-border text-xs px-3 py-2 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-purple/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none',
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
Textarea.displayName = 'Textarea'

export { Textarea }
