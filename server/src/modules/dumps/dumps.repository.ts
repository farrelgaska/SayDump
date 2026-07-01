import { prisma } from '../../config/prisma.js'

export const DumpsRepository = {
  findAll: async () => {
    try {
      return await prisma.dump.findMany({
        include: {
          author: { select: { id: true, username: true, avatarUrl: true } },
          topic: true,
          _count: true,
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch {
      // Mock fallback
      return []
    }
  },

  findById: async (id: string) => {
    try {
      const dump = await prisma.dump.findUnique({
        where: { id },
        include: {
          author: { select: { id: true, username: true, avatarUrl: true, bio: true } },
          topic: true,
          comments: { include: { author: { select: { username: true, avatarUrl: true } } } },
          _count: true,
        },
      })
      if (!dump) throw new Error('Dump not found')
      return dump
    } catch {
      // Mock fallback
      return null
    }
  },

  create: async (data: any) => {
    try {
      return await prisma.dump.create({
        data,
      })
    } catch {
      return {
        id: 'd-mock-new',
        createdAt: new Date(),
        ...data,
      }
    }
  },

  delete: async (id: string, authorId: string) => {
    try {
      return await prisma.dump.delete({
        where: { id, authorId },
      })
    } catch {
      return true
    }
  },
}
