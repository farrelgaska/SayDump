import { prisma } from '../../config/prisma.js'

export const FollowsRepository = {
  toggleFollow: async (followerId: string, followingId: string) => {
    try {
      const existing = await prisma.follow.findUnique({
        where: {
          followerId_followingId: { followerId, followingId },
        },
      })

      if (existing) {
        await prisma.follow.delete({
          where: {
            followerId_followingId: { followerId, followingId },
          },
        })
        return { following: false }
      }

      await prisma.follow.create({
        data: { followerId, followingId },
      })
      return { following: true }
    } catch {
      return { following: true }
    }
  },
}
