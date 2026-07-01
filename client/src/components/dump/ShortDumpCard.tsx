import React from 'react'
import { Link } from 'react-router-dom'
import { Dump } from '../../types/dump'
import { Badge } from '../ui/Badge'
import { formatRelativeTime } from '../../lib/date'

export default function ShortDumpCard({ dump }: { dump: Dump }) {
  return (
    <div className="p-3.5 border-b border-border/40 last:border-0 hover:bg-surface-hover/30 transition-colors text-text-primary">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[10px] text-text-muted">{formatRelativeTime(dump.createdAt)}</span>
        <Badge variant={dump.mood}>{dump.mood}</Badge>
      </div>
      <Link to={`/dumps/${dump.id}`} className="block">
        <h4 className="text-xs font-bold text-text-primary hover:text-accent-purple transition-colors line-clamp-1">
          {dump.title}
        </h4>
        <p className="text-[10px] text-text-muted line-clamp-2 mt-0.5 leading-normal">
          {dump.content}
        </p>
      </Link>
    </div>
  )
}
