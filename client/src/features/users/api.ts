import { UserFeatureData } from './types'

export const usersApi = {
  getUserProfile: async (username: string): Promise<UserFeatureData | null> => {
    return {
      id: 'stub',
      username,
      bio: 'stub bio',
    }
  },
}
