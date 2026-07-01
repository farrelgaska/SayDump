import React from 'react'
import { User } from '../../types/user'
import { formatDate } from '../../lib/date'

interface DumpMetaProps {
  author?: User
  createdAt: string
  readingTime: number
}

export default function DumpMeta({ author, createdAt, readingTime }: DumpMetaProps) {
  if (!author) return null

  return (
    <div className="flex items-center gap-3.5 text-xs text-text-muted">
      <div className="h-10 w-10 rounded-full overflow-hidden border border-border">
        <img 
          src={author.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'} 
          alt={author.username} 
          className="h-full w-full object-cover" 
        />
      </div>
      <div>
        <p className="font-bold text-text-primary">@{author.username}</p>
        <div className="flex items-center gap-2 text-[10px] text-text-muted/65">
          <span>{formatDate(createdAt)}</span>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </div>
  )
}
