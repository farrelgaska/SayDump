import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, MessageSquare, Bookmark, Clock } from 'lucide-react'
import { Dump } from '../../types/dump'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { formatRelativeTime } from '../../lib/date'

interface DumpCardProps {
  dump: Dump
  isBookmarked?: boolean
  onBookmarkToggle?: (id: string) => void
  onReact?: (id: string) => void
}

export default function DumpCard({
  dump,
  isBookmarked = false,
  onBookmarkToggle,
  onReact,
}: DumpCardProps) {
  const navigate = useNavigate()

  return (
    <Card className="hover:border-accent-purple/35 transition-all duration-300 group hover:shadow-lg hover:shadow-accent-purple/5">
      <div className="flex items-center justify-between mb-4">
        {/* Author info */}
        <div 
          onClick={() => navigate(`/profile/${dump.author?.username}`)}
          className="flex items-center gap-3 cursor-pointer group/author"
        >
          <div className="h-8 w-8 rounded-full overflow-hidden border border-border group-hover/author:border-accent-purple/65 transition-colors">
            <img 
              src={dump.author?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'} 
              alt={dump.author?.username} 
              className="h-full w-full object-cover" 
            />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-primary group-hover/author:text-accent-purple transition-colors">
              @{dump.author?.username}
            </h4>
            <span className="text-[10px] text-text-muted">{formatRelativeTime(dump.createdAt)}</span>
          </div>
        </div>

        {/* Mood indicator */}
        <Badge variant={dump.mood}>{dump.mood}</Badge>
      </div>

      {/* Main post body */}
      <Link to={`/dumps/${dump.id}`} className="block space-y-2 mb-4">
        <h3 className="font-outfit font-black text-sm text-text-primary group-hover:text-accent-purple transition-colors">
          {dump.title}
        </h3>
        <p className="text-xs text-text-muted line-clamp-3 leading-relaxed">
          {dump.content}
        </p>
      </Link>

      {/* Footer stats / actions */}
      <div className="flex items-center justify-between pt-3 border-t border-border/60 text-text-muted text-xs">
        <div className="flex items-center gap-4">
          {/* Reactions */}
          <button 
            onClick={() => onReact?.(dump.id)}
            className="flex items-center gap-1.5 hover:text-accent-pink transition-colors active:scale-95 group/react"
          >
            <Heart className="h-4 w-4 group-hover/react:fill-accent-pink/20" />
            <span className="text-[10px] font-bold">{dump._count?.reactions || 0}</span>
          </button>

          {/* Comments */}
          <Link to={`/dumps/${dump.id}`} className="flex items-center gap-1.5 hover:text-accent-purple transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span className="text-[10px] font-bold">{dump._count?.comments || 0}</span>
          </Link>

          {/* Reading Time */}
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-[9px] font-medium">{dump.readingTime} min</span>
          </div>
        </div>

        {/* Bookmarks */}
        <button
          onClick={() => onBookmarkToggle?.(dump.id)}
          className={`hover:text-accent-purple transition-colors active:scale-95 ${
            isBookmarked ? 'text-accent-purple' : ''
          }`}
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-accent-purple/20' : ''}`} />
        </button>
      </div>
    </Card>
  )
}
