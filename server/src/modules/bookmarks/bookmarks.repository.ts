import { prisma } from '../../config/prisma.js'

export const BookmarksRepository = {
  findAllByUser: async (authorId: string) => {
    try {
      return await prisma.bookmark.findMany({
        where: { authorId },
        include: {
          dump: { include: { author: { select: { username: true } } } },
        },
      })
    } catch {
      return []
    }
  },

  toggle: async (authorId: string, dumpId: string) => {
    try {
      const existing = await prisma.bookmark.findUnique({
        where: { authorId_dumpId: { authorId, dumpId } },
      })

      if (existing) {
        await prisma.bookmark.delete({
          where: { authorId_dumpId: { authorId, dumpId } },
        })
        return { bookmarked: false }
      }

      await prisma.bookmark.create({
        data: { authorId, dumpId },
      })
      return { bookmarked: true }
    } catch {
      return { bookmarked: true }
    }
  },
}
