import React from 'react'
import { motion } from 'framer-motion'

interface ReactionButtonProps {
  emoji: string
  count: number
  active: boolean
  onClick: () => void
}

export default function ReactionButton({ emoji, count, active, onClick }: ReactionButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
        active
          ? 'bg-accent-purple/10 border-accent-purple/30 text-accent-purple'
          : 'bg-surface border-border text-text-muted hover:border-border/80 hover:text-text-primary'
      }`}
    >
      <span>{emoji}</span>
      <span>{count}</span>
    </motion.button>
  )
}
