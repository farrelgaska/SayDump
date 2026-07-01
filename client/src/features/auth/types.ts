export interface AuthUser {
  id: string
  username: string
  email: string
  avatarUrl?: string
  coverUrl?: string
  bio?: string
  createdAt?: string
}

export interface LoginInput {
  email: string
  password?: string
}

export interface RegisterInput {
  email: string
  username: string
  password?: string
}
