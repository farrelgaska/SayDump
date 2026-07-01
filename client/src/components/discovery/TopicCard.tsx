import React from 'react'
import { Hash } from 'lucide-react'
import { Topic } from '../../types/topic'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

interface TopicCardProps {
  topic: Topic
  onSelect?: (slug: string) => void
}

export default function TopicCard({ topic, onSelect }: TopicCardProps) {
  return (
    <Card className="hover:border-accent-purple/35 transition-all duration-200 group flex items-start justify-between gap-4 p-4.5">
      <div className="flex gap-3 min-w-0">
        <div className="h-10 w-10 rounded-xl bg-[#0D0D10] border border-border flex items-center justify-center text-text-muted group-hover:text-accent-purple group-hover:border-accent-purple/20 transition-all duration-200 flex-shrink-0">
          <Hash className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xs font-bold text-text-primary group-hover:text-accent-purple transition-colors truncate">
            #{topic.name}
          </h3>
          <p className="text-[10px] text-text-muted line-clamp-2 mt-1 leading-normal">
            {topic.description || 'Explore the latest thoughts under this topic.'}
          </p>
        </div>
      </div>
      <Button
        variant="secondary"
        size="sm"
        className="h-8 text-[10px] rounded-lg flex-shrink-0"
        onClick={() => onSelect?.(topic.slug)}
      >
        View
      </Button>
    </Card>
  )
}
