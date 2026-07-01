import React from 'react'
import { FolderOpen } from 'lucide-react'

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ComponentType<any>
}

export function EmptyState({
  title = 'No entries found',
  description = 'There is nothing to display here yet.',
  icon: Icon = FolderOpen,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-2xl bg-surface/20">
      <div className="h-10 w-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted mb-3.5">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xs font-bold text-text-primary mb-1">{title}</h3>
      <p className="text-[10px] text-text-muted max-w-xs leading-relaxed">{description}</p>
    </div>
  )
}
