import React from 'react'
import { Heart, MessageSquare, Bookmark } from 'lucide-react'

interface ReactionBarProps {
  likes: number
  comments: number
  hasLiked?: boolean
  hasBookmarked?: boolean
  onLike?: () => void
  onBookmark?: () => void
}

export default function ReactionBar({
  likes,
  comments,
  hasLiked = false,
  hasBookmarked = false,
  onLike,
  onBookmark,
}: ReactionBarProps) {
  return (
    <div className="flex items-center justify-between border-y border-border/50 py-3 text-text-muted">
      <div className="flex items-center gap-6">
        <button
          onClick={onLike}
          className={`flex items-center gap-2 hover:text-accent-pink transition-colors active:scale-95 ${
            hasLiked ? 'text-accent-pink' : ''
          }`}
        >
          <Heart className={`h-4.5 w-4.5 ${hasLiked ? 'fill-accent-pink' : ''}`} />
          <span className="text-xs font-bold">{likes}</span>
        </button>

        <div className="flex items-center gap-2">
          <MessageSquare className="h-4.5 w-4.5" />
          <span className="text-xs font-bold">{comments}</span>
        </div>
      </div>

      <button
        onClick={onBookmark}
        className={`hover:text-accent-purple transition-colors active:scale-95 ${
          hasBookmarked ? 'text-accent-purple' : ''
        }`}
      >
        <Bookmark className={`h-4.5 w-4.5 ${hasBookmarked ? 'fill-accent-purple' : ''}`} />
      </button>
    </div>
  )
}
