import { User } from './user'
import { Topic } from './topic'

export type Mood = 'happy' | 'sad' | 'excited' | 'angry' | 'neutral'

export interface Dump {
  id: string
  title: string
  content: string
  mood: Mood
  published: boolean
  readingTime: number
  topicId: string
  authorId: string
  createdAt: string
  updatedAt: string
  author?: User
  topic?: Topic
  comments?: Comment[]
  reactions?: Reaction[]
  _count?: {
    comments: number
    reactions: number
    bookmarks: number
  }
}

export interface Comment {
  id: string
  content: string
  authorId: string
  dumpId: string
  createdAt: string
  author?: User
}

export interface Reaction {
  id: string
  type: string
  authorId: string
  dumpId: string
  author?: User
}
