import React from 'react'

interface ProfileStatsProps {
  followers: number
  following: number
  dumps: number
}

export default function ProfileStats({ followers, following, dumps }: ProfileStatsProps) {
  return (
    <div className="flex gap-6 text-xs text-text-muted border-t border-border/50 pt-3">
      <div className="flex gap-1.5">
        <span className="font-bold text-text-primary">{dumps}</span>
        <span>dumps</span>
      </div>
      <div className="flex gap-1.5">
        <span className="font-bold text-text-primary">{followers}</span>
        <span>followers</span>
      </div>
      <div className="flex gap-1.5">
        <span className="font-bold text-text-primary">{following}</span>
        <span>following</span>
      </div>
    </div>
  )
}
