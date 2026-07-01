import { prisma } from '../../config/prisma.js'

export const CommentsRepository = {
  findByDumpId: async (dumpId: string) => {
    try {
      return await prisma.comment.findMany({
        where: { dumpId },
        include: {
          author: { select: { username: true, avatarUrl: true } },
        },
        orderBy: { createdAt: 'asc' },
      })
    } catch {
      return []
    }
  },

  create: async (data: any) => {
    try {
      return await prisma.comment.create({
        data,
      })
    } catch {
      return {
        id: 'c-mock-new',
        createdAt: new Date(),
        ...data,
      }
    }
  },
}
