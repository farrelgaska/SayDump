import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { prisma } from '../../config/prisma.js'

export const AuthController = {
  register: asyncHandler(async (req: Request, res: Response) => {
    const { email, username, password } = req.body
    const result = await AuthService.register({ email, username, password })
    return successResponse(res, result, 'Registered successfully', 201)
  }),

  login: asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const result = await AuthService.login({ email, password })
    return successResponse(res, result, 'Logged in successfully')
  }),

  getMe: asyncHandler(async (req: Request, res: Response) => {
    const userId = (req as any).user?.id
    if (!userId) {
      const error: any = new Error('Authentication required.')
      error.status = 401
      throw error
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
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

    if (!user) {
      const error: any = new Error('User not found.')
      error.status = 404
      throw error
    }

    return successResponse(res, { user }, 'User retrieved successfully')
  }),
}
