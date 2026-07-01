import { prisma } from '../../config/prisma.js'

export const TopicsRepository = {
  findAll: async () => {
    try {
      return await prisma.topic.findMany({
        include: {
          _count: { select: { dumps: true } },
        },
      })
    } catch {
      // Mock fallback
      return [
        { id: 't1', name: 'Philosophy', slug: 'philosophy', description: 'Deep questions and existential queries.' },
        { id: 't2', name: 'Software Development', slug: 'software-dev', description: 'Code rants, bugs, and architectures.' },
        { id: 't3', name: 'Late Night Rants', slug: 'late-night-rants', description: 'Unfiltered thoughts when the coffee kicks in.' },
      ]
    }
  },

  findBySlug: async (slug: string) => {
    try {
      const topic = await prisma.topic.findUnique({
        where: { slug },
        include: {
          dumps: { include: { author: { select: { username: true } } } },
        },
      })
      if (!topic) throw new Error('Topic not found')
      return topic
    } catch {
      return null
    }
  },
}
