import React from 'react'
import { Calendar, MapPin } from 'lucide-react'
import { User } from '../../types/user'
import { Button } from '../ui/Button'
import { Avatar } from '../ui/Avatar'
import ProfileStats from './ProfileStats'

interface ProfileHeaderProps {
  user: User
  isOwnProfile?: boolean
  isFollowing?: boolean
  onFollowToggle?: () => void
}

export default function ProfileHeader({
  user,
  isOwnProfile = false,
  isFollowing = false,
  onFollowToggle,
}: ProfileHeaderProps) {
  return (
    <div className="relative border-b border-border/50 pb-6 text-text-primary">
      {/* Cover Banner */}
      <div className="h-44 sm:h-52 w-full bg-surface overflow-hidden relative rounded-2xl">
        <img
          src={user.coverUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800'}
          alt="Profile cover banner"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Profile Details Overlay Section */}
      <div className="px-4 sm:px-6 -mt-16 sm:-mt-20 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <Avatar
            src={user.avatarUrl}
            alt={user.username}
            size="lg"
            className="h-24 w-24 sm:h-28 sm:w-28 border-4 border-background ring-1 ring-border"
          />
          <div className="mb-2">
            <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">
              @{user.username}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs text-text-muted mt-1">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Joined July 2026
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Cyberspace
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-2">
          {isOwnProfile ? (
            <Button variant="secondary" size="sm">
              Edit Profile
            </Button>
          ) : (
            <Button
              variant={isFollowing ? 'secondary' : 'primary'}
              size="sm"
              onClick={onFollowToggle}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          )}
        </div>
      </div>

      {/* Bio and Stats */}
      <div className="px-4 sm:px-6 mt-4 max-w-xl space-y-4">
        {user.bio && (
          <p className="text-xs text-text-muted leading-relaxed">{user.bio}</p>
        )}
        
        {/* Followers / Following counts */}
        <ProfileStats followers={user._count?.followers || 0} following={user._count?.following || 0} dumps={user._count?.dumps || 0} />
      </div>
    </div>
  )
}
