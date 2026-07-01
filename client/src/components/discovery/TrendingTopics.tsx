import React from 'react'
import { Link } from 'react-router-dom'
import { Hash, TrendingUp } from 'lucide-react'
import { dummyTopics } from '../../data/dummyTopics'

export default function TrendingTopics() {
  return (
    <div className="border border-border bg-surface p-4.5 rounded-2xl text-text-primary">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4 text-accent-lime" />
        <h3 className="font-outfit font-black text-xs uppercase tracking-wider">
          Trending Topics
        </h3>
      </div>
      <div className="space-y-3">
        {dummyTopics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics?tab=${topic.slug}`}
            className="flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-border hover:bg-surface-hover/30 transition-all duration-200 group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-7 w-7 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted group-hover:text-accent-lime transition-colors">
                <Hash className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-text-primary group-hover:text-accent-lime transition-colors truncate">
                  #{topic.name}
                </p>
                <p className="text-[9px] text-text-muted">{topic.description || 'Discuss trends'}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-md">
              {topic._count?.dumps || 0}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
