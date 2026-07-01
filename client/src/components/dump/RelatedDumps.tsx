import React from 'react'
import { Link } from 'react-router-dom'
import { Dump } from '../../types/dump'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

interface RelatedDumpsProps {
  dumps: Dump[]
}

export default function RelatedDumps({ dumps }: RelatedDumpsProps) {
  return (
    <div className="space-y-4 text-text-primary">
      <h3 className="font-outfit font-black text-sm text-text-primary">
        More Dumps You Might Like
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dumps.map((dump) => (
          <Card key={dump.id} className="hover:border-accent-purple/35 transition-all duration-200 group p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-text-muted">@{dump.author?.username}</span>
              <Badge variant={dump.mood}>{dump.mood}</Badge>
            </div>
            <Link to={`/dumps/${dump.id}`} className="block">
              <h4 className="text-xs font-bold text-text-primary group-hover:text-accent-purple transition-colors line-clamp-1">
                {dump.title}
              </h4>
              <p className="text-[10px] text-text-muted line-clamp-2 mt-1 leading-relaxed">
                {dump.content}
              </p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
