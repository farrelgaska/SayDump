import { Dump } from '../types/dump'
import { dummyUsers } from './dummyUsers'
import { dummyTopics } from './dummyTopics'

export const dummyDumps: Dump[] = [
  {
    id: 'd1',
    title: 'The Existential Weight of a Semicolon',
    content: 'Have you ever spent three hours hunting down a bug, only to find out it was a misplaced semicolon? It makes you question not only your programming skills, but the universe. Why do we build these massive structures of logic on such fragile rules?',
    mood: 'sad',
    published: true,
    readingTime: 2,
    topicId: 't2',
    authorId: 'u1',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30m ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    author: dummyUsers[0],
    topic: dummyTopics[1],
    _count: {
      comments: 5,
      reactions: 23,
      bookmarks: 4,
    },
  },
  {
    id: 'd2',
    title: 'Waking up at 3 AM with an Idea',
    content: 'It happened again. I woke up at 3 AM, bolt upright, with the exact architecture for our caching layer. I immediately ran to the computer. Two hours later, it compiles and works flawlessly. Coffee feels amazing right now!',
    mood: 'excited',
    published: true,
    readingTime: 3,
    topicId: 't2',
    authorId: 'u2',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5h ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    author: dummyUsers[1],
    topic: dummyTopics[2],
    _count: {
      comments: 12,
      reactions: 98,
      bookmarks: 15,
    },
  },
]
