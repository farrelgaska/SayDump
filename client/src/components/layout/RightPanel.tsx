import React from 'react'
import TrendingTopics from '../discovery/TrendingTopics'
import SuggestedWriters from '../discovery/SuggestedWriters'
import DailyPrompt from '../discovery/DailyPrompt'

export default function RightPanel() {
  return (
    <div className="space-y-6">
      {/* Daily creative prompt */}
      <DailyPrompt />

      {/* Suggested Writers widget */}
      <SuggestedWriters />

      {/* Trending Topics list */}
      <TrendingTopics />
    </div>
  )
}
