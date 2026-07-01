import React from 'react'
import { cn } from '../../lib/cn'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-[10px]',
    md: 'h-10 w-10 text-xs',
    lg: 'h-16 w-16 text-lg',
  }

  const initials = alt.slice(0, 2).toUpperCase()

  return (
    <div
      className={cn(
        'rounded-full overflow-hidden border border-border bg-surface-hover flex items-center justify-center font-bold text-text-primary select-none flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover animate-fade-in" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}
