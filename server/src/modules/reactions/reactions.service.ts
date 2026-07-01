import { prisma } from '../../config/prisma.js'

export const ReactionsService = {
  toggle: async (authorId: string, dumpId: string, type: string) => {
    try {
      const existing = await prisma.reaction.findUnique({
        where: {
          authorId_dumpId_type: { authorId, dumpId, type },
        },
      })

      if (existing) {
        await prisma.reaction.delete({
          where: {
            authorId_dumpId_type: { authorId, dumpId, type },
          },
        })
        return { reacted: false }
      }

      await prisma.reaction.create({
        data: { authorId, dumpId, type },
      })
      return { reacted: true }
    } catch {
      return { reacted: true }
    }
  },
}
