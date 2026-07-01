import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FeedTabs from '../components/discovery/FeedTabs'
import DumpCard from '../components/dump/DumpCard'
import { EmptyState } from '../components/ui/EmptyState'
import { Skeleton } from '../components/ui/Skeleton'
import { useDumpsQuery } from '../features/dumps/hooks'
import { useBookmarksQuery, useToggleBookmarkMutation } from '../features/bookmarks/hooks'
import { useAddReactionMutation } from '../features/reactions/hooks'
import { useAuth } from '../app/providers/AuthProvider'

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState('personalized')
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // Queries
  const { data: dumps = [], isLoading, isError, refetch } = useDumpsQuery()
  const { data: bookmarkedDumps = [] } = useBookmarksQuery()
  
  // Mutations
  const toggleBookmarkMutation = useToggleBookmarkMutation()
  
  const bookmarkedIds = bookmarkedDumps.map(d => d.id)

  const handleBookmarkToggle = (id: string) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    toggleBookmarkMutation.mutate(id)
  }

  // React hook needs a specific dumpId context. We can handle this by mutating inline.
  const queryClient = useDumpsQuery().refetch // We can use query client or react-query invalidation inside mutations
  const addReactionMutation = useToggleBookmarkMutation() // we can create a local toggle reaction call or mutate via useAddReactionMutation

  const handleReact = (id: string) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    // Toggle reaction - we can just hit POST /dumps/:id/reactions
    // In our backend, this will add/remove a like. We will call it.
    apiClientToggleReact(id)
  }

  // Helper for reaction toggling
  const apiClientToggleReact = async (dumpId: string) => {
    try {
      const { apiClient } = await import('../lib/apiClient')
      await apiClient.post(`/dumps/${dumpId}/reactions`, { type: 'like' })
      refetch()
    } catch (err) {
      console.error(err)
    }
  }

  // Feed tabs filter on client side
  const filteredDumps = dumps.filter((dump) => {
    if (activeTab === 'personalized') return true
    if (activeTab === 'latest') return true
    if (activeTab === 'trending') return (dump._count?.reactions || 0) >= 1
    return true
  })

  return (
    <div className="space-y-6 text-text-primary">
      {/* Header and Feed Selector Tabs */}
      <div className="space-y-4">
        <div>
          <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">Your Feed</h2>
          <p className="text-[10px] text-text-muted">Explore the latest content dumped by creators worldwide.</p>
        </div>
        <FeedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Dumps grid */}
      <div className="space-y-4">
        {isLoading && (
          <div className="space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        )}

        {isError && (
          <div className="p-6 rounded-2xl bg-accent-pink/5 border border-accent-pink/20 text-center">
            <p className="text-xs font-bold text-accent-pink">Failed to retrieve feed.</p>
            <button onClick={() => refetch()} className="text-[10px] underline text-text-muted mt-2 font-bold uppercase tracking-wider">
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && filteredDumps.map((dump) => (
          <DumpCard
            key={dump.id}
            dump={dump}
            isBookmarked={bookmarkedIds.includes(dump.id)}
            onBookmarkToggle={handleBookmarkToggle}
            onReact={handleReact}
          />
        ))}

        {!isLoading && !isError && filteredDumps.length === 0 && (
          <EmptyState
            title="Empty feed"
            description="There are no dumps in this filter category yet."
          />
        )}
      </div>
    </div>
  )
}
