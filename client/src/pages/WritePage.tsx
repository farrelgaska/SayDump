import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WriteEditor from '../components/write/WriteEditor'
import PublishPanel from '../components/write/PublishPanel'
import { Mood } from '../types/dump'
import { useCreateDumpMutation } from '../features/dumps/hooks'

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState<Mood>('neutral')
  const [topic, setTopic] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const navigate = useNavigate()
  const createDumpMutation = useCreateDumpMutation()

  const validate = () => {
    const tempErrors: Record<string, string> = {}
    if (!title.trim()) tempErrors.title = 'Title is required'
    if (!content.trim()) tempErrors.content = 'Content is required'
    if (!topic) tempErrors.topic = 'Please choose a topic category'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handlePublish = () => {
    if (!validate()) return
    
    createDumpMutation.mutate(
      {
        title,
        content,
        mood,
        topicId: topic,
      },
      {
        onSuccess: (data) => {
          navigate(`/dumps/${data.id}`)
        },
        onError: (err: any) => {
          alert(err.response?.data?.message || 'Failed to publish dump.')
        },
      }
    )
  }

  const handleSaveDraft = () => {
    if (!validate()) return
    alert('Draft saved locally')
  }

  return (
    <div className="space-y-6 text-text-primary">
      <div>
        <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">Create a Dump</h2>
        <p className="text-[10px] text-text-muted">Unleash what's inside. Style it later, dump it now.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Editor component */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-border bg-surface/40">
          <WriteEditor
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            errors={errors}
          />
        </div>

        {/* Publish side panel */}
        <div className="lg:col-span-1">
          <PublishPanel
            mood={mood}
            setMood={setMood}
            selectedTopic={topic}
            setSelectedTopic={setTopic}
            isSubmitting={createDumpMutation.isPending}
            onPublish={handlePublish}
            onSaveDraft={handleSaveDraft}
          />
        </div>
      </div>
    </div>
  )
}
