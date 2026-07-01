import React, { useState } from 'react'
import TopicCard from '../components/discovery/TopicCard'
import { Input } from '../components/ui/Input'
import { Skeleton } from '../components/ui/Skeleton'
import { useTopicsQuery } from '../features/topics/hooks'
import { useNavigate } from 'react-router-dom'

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: topics = [], isLoading, isError, refetch } = useTopicsQuery()
  const navigate = useNavigate()

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectTopic = (slug: string) => {
    navigate(`/feed?topic=${slug}`)
  }

  return (
    <div className="space-y-6 text-text-primary">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">Topics</h2>
          <p className="text-[10px] text-text-muted font-medium">Explore streams and rants organized by categories.</p>
        </div>
        
        {/* Search input */}
        <div className="w-full sm:max-w-xs">
          <Input
            placeholder="Search topic streams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid of topic cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading && (
          <>
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </>
        )}

        {isError && (
          <div className="p-6 rounded-2xl bg-accent-pink/5 border border-accent-pink/20 text-center col-span-2">
            <p className="text-xs font-bold text-accent-pink">Failed to retrieve topics.</p>
            <button onClick={() => refetch()} className="text-[10px] underline text-text-muted mt-2 font-bold uppercase tracking-wider">
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && filteredTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onSelect={handleSelectTopic} />
        ))}
      </div>
    </div>
  )
}
