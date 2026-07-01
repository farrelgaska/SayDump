import { UsersRepository } from './users.repository.js'

export const UsersService = {
  getProfile: async (username: string) => {
    return UsersRepository.findByUsername(username)
  },

  updateProfile: async (userId: string, data: { bio?: string; avatarUrl?: string; coverUrl?: string }) => {
    return UsersRepository.update(userId, data)
  },
}
