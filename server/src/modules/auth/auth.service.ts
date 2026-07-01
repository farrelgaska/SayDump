import { RegisterInput, LoginInput } from './auth.types.js'
import { passwordUtils } from '../../utils/bcrypt.js'
import { jwtUtils } from '../../utils/jwt.js'
import { prisma } from '../../config/prisma.js'

export const AuthService = {
  register: async (input: RegisterInput) => {
    // 1. Check if email or username is already taken
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: input.email },
          { username: input.username }
        ]
      }
    })
    
    if (existingUser) {
      const field = existingUser.email === input.email ? 'email' : 'username'
      const error: any = new Error(`${field === 'email' ? 'Email' : 'Username'} is already registered.`)
      error.status = 400
      throw error
    }

    // 2. Hash password
    const hashedPassword = await passwordUtils.hash(input.password)
    
    // 3. Create user in database
    const user = await prisma.user.create({
      data: {
        email: input.email,
        username: input.username,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        username: true,
        avatarUrl: true,
        coverUrl: true,
        bio: true,
        createdAt: true,
      }
    })

    // 4. Generate token
    const token = jwtUtils.sign({ id: user.id, username: user.username, email: user.email })
    return { user, token }
  },

  login: async (input: LoginInput) => {
    // 1. Find user by email
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    })
    
    if (!user) {
      const error: any = new Error('Invalid email or password.')
      error.status = 401
      throw error
    }

    // 2. Compare passwords
    const isValidPassword = await passwordUtils.compare(input.password, user.password)
    if (!isValidPassword) {
      const error: any = new Error('Invalid email or password.')
      error.status = 401
      throw error
    }

    // 3. Generate token
    const token = jwtUtils.sign({ id: user.id, username: user.username, email: user.email })
    
    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      avatarUrl: user.avatarUrl,
      coverUrl: user.coverUrl,
      bio: user.bio,
      createdAt: user.createdAt,
    }

    return { user: safeUser, token }
  },
}
