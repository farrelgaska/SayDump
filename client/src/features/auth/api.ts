import { AuthUser } from './types'

export const authApi = {
  login: async (): Promise<AuthUser> => {
    return { id: 'stub', username: 'stub', email: 'stub@example.com' }
  },
  register: async (): Promise<AuthUser> => {
    return { id: 'stub', username: 'stub', email: 'stub@example.com' }
  },
}
