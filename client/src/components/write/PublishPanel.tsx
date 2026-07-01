import React from 'react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import MoodSelector from './MoodSelector'
import TopicSelector from './TopicSelector'
import DraftStatus from './DraftStatus'
import { Mood } from '../../types/dump'

interface PublishPanelProps {
  mood: Mood
  setMood: (mood: Mood) => void
  selectedTopic: string
  setSelectedTopic: (topic: string) => void
  isSubmitting: boolean
  onPublish: () => void
  onSaveDraft: () => void
}

export default function PublishPanel({
  mood,
  setMood,
  selectedTopic,
  setSelectedTopic,
  isSubmitting,
  onPublish,
  onSaveDraft,
}: PublishPanelProps) {
  return (
    <Card className="space-y-6">
      <div>
        <h3 className="font-outfit font-bold text-xs text-slate-100 uppercase tracking-wider mb-1">
          Publish settings
        </h3>
        <p className="text-[10px] text-slate-500">Associate mood and topics for search discovery.</p>
      </div>

      {/* Mood Selection */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-slate-350">Mood Expression</label>
        <MoodSelector selected={mood} onChange={setMood} />
      </div>

      {/* Topic Selection */}
      <div className="space-y-2">
        <label className="text-[11px] font-semibold text-slate-350">Choose Topic</label>
        <TopicSelector selected={selectedTopic} onChange={setSelectedTopic} />
      </div>

      {/* Draft Status indicator */}
      <DraftStatus isSaved={false} />

      {/* Actions */}
      <div className="flex flex-col gap-2 pt-2 border-t border-slate-900">
        <Button onClick={onPublish} disabled={isSubmitting} size="md" className="w-full">
          {isSubmitting ? 'Publishing...' : 'Publish Dump'}
        </Button>
        <Button onClick={onSaveDraft} disabled={isSubmitting} variant="secondary" size="md" className="w-full">
          Save Draft
        </Button>
      </div>
    </Card>
  )
}
