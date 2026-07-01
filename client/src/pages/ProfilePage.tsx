import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTabs from '../components/profile/ProfileTabs'
import DumpCard from '../components/dump/DumpCard'
import { EmptyState } from '../components/ui/EmptyState'
import { Skeleton } from '../components/ui/Skeleton'
import { useUserProfileQuery, useToggleFollowMutation } from '../features/users/hooks'
import { useDumpsQuery } from '../features/dumps/hooks'
import { useBookmarksQuery } from '../features/bookmarks/hooks'
import { useAuth } from '../app/providers/AuthProvider'

export default function ProfilePage() {
  const { username = '' } = useParams<{ username: string }>()
  const [activeTab, setActiveTab] = useState('dumps')
  const [isFollowingState, setIsFollowingState] = useState(false)
  
  const { user: authUser, isAuthenticated } = useAuth()
  
  // Queries
  const { data: profile, isLoading: isProfileLoading, isError: isProfileError } = useUserProfileQuery(username)
  
  // Conditionally load user dumps once profile.id is resolved
  const { data: dumps = [], isLoading: isDumpsLoading } = useDumpsQuery(
    profile ? { authorId: profile.id } : {}
  )
  
  const { data: bookmarks = [] } = useBookmarksQuery()
  const toggleFollowMutation = useToggleFollowMutation()

  const isOwnProfile = authUser?.username === username

  const handleFollowToggle = () => {
    if (!isAuthenticated) return
    if (!profile) return
    toggleFollowMutation.mutate(profile.id, {
      onSuccess: () => {
        setIsFollowingState(!isFollowingState)
      }
    })
  }

  if (isProfileLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-44 w-full" />
        <Skeleton className="h-10 w-44" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (isProfileError || !profile) {
    return (
      <div className="p-6 rounded-2xl bg-accent-pink/5 border border-accent-pink/20 text-center">
        <p className="text-xs font-bold text-accent-pink">User profile not found.</p>
        <Link to="/feed" className="text-[10px] underline text-text-muted mt-2 font-bold uppercase tracking-wider block">
          Return to Feed
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 text-text-primary">
      {/* Header element */}
      <div className="rounded-2xl overflow-hidden border border-border bg-surface/40">
        <ProfileHeader
          user={profile}
          isOwnProfile={isOwnProfile}
          isFollowing={isOwnProfile ? false : isFollowingState}
          onFollowToggle={handleFollowToggle}
        />
      </div>

      {/* Tabs select */}
      <ProfileTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showDrafts={isOwnProfile}
      />

      {/* Dumps listings */}
      <div className="space-y-4">
        {isDumpsLoading && (
          <div className="space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        )}

        {!isDumpsLoading && activeTab === 'dumps' && (
          dumps.map((dump) => (
            <DumpCard key={dump.id} dump={{ ...dump, author: profile }} />
          ))
        )}

        {!isDumpsLoading && activeTab === 'bookmarks' && (
          isOwnProfile ? (
            bookmarks.length > 0 ? (
              bookmarks.map((dump) => (
                <DumpCard key={dump.id} dump={dump} isBookmarked={true} />
              ))
            ) : (
              <EmptyState
                title="No Bookmarked Dumps"
                description="You haven't bookmarked any thoughts yet."
              />
            )
          ) : (
            <EmptyState
              title="Private Bookmarks"
              description="Bookmarks of this user are private."
            />
          )
        )}

        {!isDumpsLoading && activeTab === 'drafts' && (
          <EmptyState
            title="No Drafts"
            description="You don't have any pending drafts."
          />
        )}

        {!isDumpsLoading && activeTab === 'dumps' && dumps.length === 0 && (
          <EmptyState
            title="No Dumps Yet"
            description="This user hasn't posted any dumps."
          />
        )}
      </div>
    </div>
  )
}
