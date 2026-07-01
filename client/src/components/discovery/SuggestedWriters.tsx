import React from 'react'
import { Users } from 'lucide-react'
import { dummyUsers } from '../../data/dummyUsers'
import WriterCard from '../profile/WriterCard'

export default function SuggestedWriters() {
  return (
    <div className="border border-border bg-surface p-4.5 rounded-2xl text-text-primary">
      <div className="flex items-center gap-2 mb-4">
        <Users className="h-4 w-4 text-accent-lime" />
        <h3 className="font-outfit font-black text-xs uppercase tracking-wider">
          Suggested Writers
        </h3>
      </div>
      <div className="divide-y divide-border">
        {dummyUsers.map((writer) => (
          <WriterCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  )
}
