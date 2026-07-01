export interface User {
  id: string
  username: string
  email: string
  avatarUrl?: string
  coverUrl?: string
  bio?: string
  createdAt: string
  updatedAt: string
  _count?: {
    followers: number
    following: number
    dumps: number
  }
}
