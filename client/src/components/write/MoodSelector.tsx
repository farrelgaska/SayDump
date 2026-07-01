import React from 'react'
import { Mood } from '../../types/dump'

interface MoodSelectorProps {
  selected: Mood
  onChange: (mood: Mood) => void
}

export default function MoodSelector({ selected, onChange }: MoodSelectorProps) {
  const moods: { id: Mood; label: string; emoji: string; colorClass: string }[] = [
    { id: 'happy', label: 'Happy', emoji: '😊', colorClass: 'border-amber-500/30 hover:border-amber-500' },
    { id: 'sad', label: 'Sad', emoji: '😢', colorClass: 'border-blue-500/30 hover:border-blue-500' },
    { id: 'excited', label: 'Excited', emoji: '🤩', colorClass: 'border-pink-500/30 hover:border-pink-500' },
    { id: 'angry', label: 'Angry', emoji: '😡', colorClass: 'border-rose-500/30 hover:border-rose-500' },
    { id: 'neutral', label: 'Neutral', emoji: '😐', colorClass: 'border-slate-750 hover:border-slate-500' },
  ]

  return (
    <div className="grid grid-cols-5 gap-1.5">
      {moods.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => onChange(m.id)}
          className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[10px] font-semibold transition-all ${
            selected === m.id
              ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300'
              : `bg-slate-900/60 text-slate-500 ${m.colorClass}`
          }`}
        >
          <span className="text-sm mb-0.5">{m.emoji}</span>
          <span>{m.label}</span>
        </button>
      ))}
    </div>
  )
}
