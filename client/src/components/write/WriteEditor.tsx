import React from 'react'
import { Textarea } from '../ui/Textarea'
import { Input } from '../ui/Input'

interface WriteEditorProps {
  title: string
  setTitle: (title: string) => void
  content: string
  setContent: (content: string) => void
  errors?: Record<string, string>
}

export default function WriteEditor({
  title,
  setTitle,
  content,
  setContent,
  errors = {},
}: WriteEditorProps) {
  return (
    <div className="space-y-6">
      {/* Title Input */}
      <div>
        <input
          type="text"
          placeholder="Title of your dump..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent font-outfit font-extrabold text-2xl sm:text-3xl text-white placeholder-slate-650 focus:outline-none border-b border-transparent focus:border-slate-800 pb-2 transition-colors"
        />
        {errors.title && <span className="text-[10px] text-rose-450 mt-1 block">{errors.title}</span>}
      </div>

      {/* Editor Body */}
      <div>
        <textarea
          placeholder="Start writing whatever is on your mind. No filters, just raw dumping..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[250px] bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none resize-none leading-relaxed text-sm sm:text-base"
        />
        {errors.content && <span className="text-[10px] text-rose-450 mt-1 block">{errors.content}</span>}
      </div>
    </div>
  )
}
