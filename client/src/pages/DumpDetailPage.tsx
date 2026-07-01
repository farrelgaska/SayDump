import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReadingProgress from '../components/dump/ReadingProgress'
import DumpMeta from '../components/dump/DumpMeta'
import ReactionBar from '../components/dump/ReactionBar'
import CommentSection from '../components/dump/CommentSection'
import RelatedDumps from '../components/dump/RelatedDumps'
import { Badge } from '../components/ui/Badge'
import { Skeleton } from '../components/ui/Skeleton'
import { useDumpDetailQuery, useDumpsQuery } from '../features/dumps/hooks'
import { useCommentsQuery, useCreateCommentMutation } from '../features/comments/hooks'
import { useBookmarksQuery, useToggleBookmarkMutation } from '../features/bookmarks/hooks'
import { useAddReactionMutation } from '../features/reactions/hooks'
import { useAuth } from '../app/providers/AuthProvider'

export default function DumpDetailPage() {
  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  // Queries
  const { data: dump, isLoading, isError, refetch } = useDumpDetailQuery(id)
  const { data: comments = [] } = useCommentsQuery(id)
  const { data: bookmarks = [] } = useBookmarksQuery()
  const { data: allDumps = [] } = useDumpsQuery()

  // Mutations
  const createCommentMutation = useCreateCommentMutation(id)
  const toggleBookmarkMutation = useToggleBookmarkMutation()
  const addReactionMutation = useAddReactionMutation(id)

  const isBookmarked = bookmarks.some((b) => b.id === id)
  const hasLiked = false // we can mock or query if user has reaction records

  const handleLike = () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    addReactionMutation.mutate('like')
  }

  const handleBookmark = () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    toggleBookmarkMutation.mutate(id)
  }

  const handlePostComment = (text: string) => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    createCommentMutation.mutate(text)
  }

  // Filter other dumps for related
  const relatedDumps = allDumps.filter((d) => d.id !== id).slice(0, 2)

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (isError || !dump) {
    return (
      <div className="p-6 rounded-2xl bg-accent-pink/5 border border-accent-pink/20 text-center">
        <p className="text-xs font-bold text-accent-pink">Dump not found or failed to load.</p>
        <Link to="/feed" className="text-[10px] underline text-text-muted mt-2 font-bold uppercase tracking-wider block">
          Return to Feed
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8 relative text-text-primary">
      {/* Scroll indicator */}
      <ReadingProgress />

      {/* Navigation and Topic Info */}
      <div className="flex items-center justify-between">
        <Link to="/feed" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Feed</span>
        </Link>
        <Badge variant={dump.mood}>{dump.mood}</Badge>
      </div>

      {/* Article Contents */}
      <article className="p-6 sm:p-10 rounded-2xl border border-border bg-surface/40 space-y-6">
        <div className="space-y-3">
          <h1 className="font-outfit font-black text-2xl sm:text-4xl text-text-primary tracking-tight leading-tight">
            {dump.title}
          </h1>
          
          {/* Author/Date Meta */}
          <DumpMeta
            author={dump.author}
            createdAt={dump.createdAt}
            readingTime={dump.readingTime}
          />
        </div>

        {/* Content body */}
        <div className="text-text-primary leading-relaxed text-sm sm:text-base whitespace-pre-wrap pt-4 border-t border-border/50">
          {dump.content}
        </div>

        {/* Reactions/Bookmarks controls */}
        <ReactionBar
          likes={dump._count?.reactions || 0}
          comments={comments.length}
          hasLiked={hasLiked}
          hasBookmarked={isBookmarked}
          onLike={handleLike}
          onBookmark={handleBookmark}
        />
      </article>

      {/* Responses Section */}
      <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/40">
        <CommentSection
          comments={comments}
          onPostComment={handlePostComment}
        />
      </div>

      {/* Related panel */}
      {relatedDumps.length > 0 && <RelatedDumps dumps={relatedDumps} />}
    </div>
  )
}
