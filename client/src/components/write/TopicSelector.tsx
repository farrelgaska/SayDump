import React from 'react'
import { useTopicsQuery } from '../../features/topics/hooks'

interface TopicSelectorProps {
  selected: string
  onChange: (topicId: string) => void
}

export default function TopicSelector({ selected, onChange }: TopicSelectorProps) {
  const { data: topics = [] } = useTopicsQuery()

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded-xl bg-surface border border-border text-xs px-3 py-2 text-text-primary focus:outline-none focus:border-accent-purple/50 transition-all duration-200"
    >
      <option value="" disabled className="bg-surface">Select a topic Category...</option>
      {topics.map((topic) => (
        <option key={topic.id} value={topic.id} className="bg-surface">
          #{topic.name}
        </option>
      ))}
    </select>
  )
}
