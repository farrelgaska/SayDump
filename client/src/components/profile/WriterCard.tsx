import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../types/user'
import { Avatar } from '../ui/Avatar'
import { Button } from '../ui/Button'

interface WriterCardProps {
  writer: User
  isFollowing?: boolean
  onFollowToggle?: (id: string) => void
}

export default function WriterCard({ writer, isFollowing = false, onFollowToggle }: WriterCardProps) {
  return (
    <div className="flex items-center justify-between gap-3 p-3.5 border-b border-border/40 last:border-0 hover:bg-surface-hover/20 transition-colors text-text-primary">
      <Link to={`/profile/${writer.username}`} className="flex items-center gap-3 min-w-0 group">
        <Avatar src={writer.avatarUrl} alt={writer.username} size="sm" className="group-hover:border-accent-purple/50 transition-colors" />
        <div className="min-w-0">
          <h4 className="text-xs font-bold text-text-primary group-hover:text-accent-purple transition-colors truncate">
            @{writer.username}
          </h4>
          <p className="text-[10px] text-text-muted truncate max-w-[150px]">{writer.bio || 'Author on SayDump'}</p>
        </div>
      </Link>
      <Button
        variant={isFollowing ? 'secondary' : 'primary'}
        size="sm"
        className="h-7.5 px-3 rounded-lg text-[10px]"
        onClick={() => onFollowToggle?.(writer.id)}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </div>
  )
}
