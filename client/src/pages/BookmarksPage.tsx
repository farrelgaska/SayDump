import React from 'react'
import { Bookmark } from 'lucide-react'
import DumpCard from '../components/dump/DumpCard'
import { EmptyState } from '../components/ui/EmptyState'
import { Skeleton } from '../components/ui/Skeleton'
import { useBookmarksQuery, useToggleBookmarkMutation } from '../features/bookmarks/hooks'

export default function BookmarksPage() {
  const { data: bookmarkedDumps = [], isLoading, isError, refetch } = useBookmarksQuery()
  const toggleBookmarkMutation = useToggleBookmarkMutation()

  const handleBookmarkToggle = (id: string) => {
    toggleBookmarkMutation.mutate(id)
  }

  return (
    <div className="space-y-6 text-text-primary">
      <div>
        <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">Your Bookmarks</h2>
        <p className="text-[10px] text-text-muted">Access your saved dumps and articles at any time.</p>
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        )}

        {isError && (
          <div className="p-6 rounded-2xl bg-accent-pink/5 border border-accent-pink/20 text-center">
            <p className="text-xs font-bold text-accent-pink">Failed to retrieve bookmarks.</p>
            <button onClick={() => refetch()} className="text-[10px] underline text-text-muted mt-2 font-bold uppercase tracking-wider">
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && bookmarkedDumps.map((dump) => (
          <DumpCard 
            key={dump.id} 
            dump={dump} 
            isBookmarked={true} 
            onBookmarkToggle={handleBookmarkToggle} 
          />
        ))}

        {!isLoading && !isError && bookmarkedDumps.length === 0 && (
          <EmptyState
            title="No Bookmarked Dumps"
            description="You haven't saved any dumps yet."
            icon={Bookmark}
          />
        )}
      </div>
    </div>
  )
}
