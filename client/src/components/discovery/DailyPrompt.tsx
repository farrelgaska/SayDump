import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DailyPrompt() {
  const navigate = useNavigate()

  return (
    <div className="p-4.5 rounded-2xl bg-gradient-to-br from-accent-purple/10 via-accent-pink/5 to-surface border border-border shadow-md text-text-primary">
      <div className="flex items-center gap-2 mb-2.5">
        <Sparkles className="h-4.5 w-4.5 text-accent-pink animate-pulse" />
        <span className="text-[10px] font-bold text-accent-pink uppercase tracking-widest">Daily Prompt</span>
      </div>
      <h3 className="text-xs font-bold leading-snug mb-3">
        "What is a design trend from the 2000s that you wish would make a modern comeback?"
      </h3>
      <button 
        onClick={() => navigate('/write?prompt=2000s-design')}
        className="flex items-center gap-1.5 text-[10px] font-bold text-accent-lime hover:text-accent-lime/80 transition-colors"
      >
        <span>Dump your response</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
