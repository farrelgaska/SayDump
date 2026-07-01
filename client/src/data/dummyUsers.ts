import { User } from '../types/user'

export const dummyUsers: User[] = [
  {
    id: 'u1',
    username: 'johndoe',
    email: 'john@example.com',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    coverUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    bio: 'Just dumping thoughts when gravity fails.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      followers: 120,
      following: 75,
      dumps: 24,
    },
  },
  {
    id: 'u2',
    username: 'alex_smith',
    email: 'alex@example.com',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    coverUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800',
    bio: 'Fulltime writer, lifetime dumper. Focus on web design.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      followers: 480,
      following: 190,
      dumps: 58,
    },
  },
]
export const dummyCurrentUser = dummyUsers[0]
