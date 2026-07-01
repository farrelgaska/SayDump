import { FollowsRepository } from './follows.repository.js'

export const FollowsService = {
  toggleFollow: async (followerId: string, followingId: string) => {
    if (followerId === followingId) {
      throw new Error("You can't follow yourself.")
    }
    return FollowsRepository.toggleFollow(followerId, followingId)
  },
}
