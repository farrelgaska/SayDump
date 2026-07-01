import React from 'react'

interface ProfileTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  showDrafts?: boolean
}

export default function ProfileTabs({ activeTab, setActiveTab, showDrafts = false }: ProfileTabsProps) {
  const tabs = [
    { id: 'dumps', label: 'Dumps' },
    { id: 'bookmarks', label: 'Bookmarks' },
    ...(showDrafts ? [{ id: 'drafts', label: 'Drafts' }] : []),
  ]

  return (
    <div className="flex border-b border-border/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-3.5 text-xs font-semibold border-b-2 transition-all ${
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
