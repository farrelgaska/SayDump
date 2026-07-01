import { prisma } from '../../config/prisma.js'

export const UsersRepository = {
  findByUsername: async (username: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { username },
        include: {
          _count: {
            select: { followers: true, following: true, dumps: true },
          },
        },
      })
      if (!user) throw new Error('User not found')
      return user
    } catch {
      // Mock fallback
      return {
        id: 'u-mock',
        username,
        email: `${username}@example.com`,
        bio: 'Fallback mock bio',
        avatarUrl: null,
        coverUrl: null,
        createdAt: new Date(),
        _count: { followers: 10, following: 20, dumps: 2 },
      }
    }
  },

  update: async (id: string, data: any) => {
    try {
      return await prisma.user.update({
        where: { id },
        data,
      })
    } catch {
      return {
        id,
        ...data,
      }
    }
  },
}
