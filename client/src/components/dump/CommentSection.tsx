import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { Comment } from '../../types/dump'
import { Avatar } from '../ui/Avatar'
import { Button } from '../ui/Button'
import { Textarea } from '../ui/Textarea'
import { formatRelativeTime } from '../../lib/date'

interface CommentSectionProps {
  comments: Comment[]
  onPostComment: (text: string) => void
}

export default function CommentSection({ comments, onPostComment }: CommentSectionProps) {
  const [commentText, setCommentText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentText.trim()) return
    onPostComment(commentText)
    setCommentText('')
  }

  return (
    <div className="space-y-6 text-text-primary">
      <h3 className="font-outfit font-black text-sm text-text-primary">
        Comments ({comments.length})
      </h3>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Avatar alt="Current User" size="sm" />
        <div className="flex-1 flex flex-col gap-2">
          <Textarea
            placeholder="Share your response..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full h-20 text-xs"
          />
          <div className="flex justify-end">
            <Button type="submit" size="sm" className="gap-1.5">
              <span>Respond</span>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4 pt-4 border-t border-border/55">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar 
              src={comment.author?.avatarUrl} 
              alt={comment.author?.username || 'user'} 
              size="sm" 
            />
            <div className="flex-1 p-3 rounded-xl bg-surface/50 border border-border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-text-primary">
                  @{comment.author?.username}
                </span>
                <span className="text-[9px] text-text-muted">
                  {formatRelativeTime(comment.createdAt)}
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {comment.content}
              </p>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-center text-[11px] text-text-muted py-4">
            No responses yet. Be the first to start the conversation!
          </p>
        )}
      </div>
    </div>
  )
}
