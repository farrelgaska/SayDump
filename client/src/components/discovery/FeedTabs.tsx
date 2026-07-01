import React from 'react'

interface FeedTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function FeedTabs({ activeTab, setActiveTab }: FeedTabsProps) {
  const feedFilters = [
    { id: 'personalized', label: 'For You' },
    { id: 'latest', label: 'Latest Dumps' },
    { id: 'trending', label: 'Trending' },
  ]

  return (
    <div className="flex border-b border-border/50 overflow-x-auto scrollbar-none gap-2">
      {feedFilters.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4.5 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-all duration-200 ${
            activeTab === tab.id
              ? 'border-accent-purple text-accent-purple'
              : 'border-transparent text-text-muted hover:text-text-primary'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
