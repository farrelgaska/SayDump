import { Request, Response } from 'express'
import { UsersService } from './users.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const UsersController = {
  getProfile: asyncHandler(async (req: Request, res: Response) => {
    const { username } = req.params
    const profile = await UsersService.getProfile(username)
    return successResponse(res, profile)
  }),

  updateProfile: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { bio, avatarUrl, coverUrl } = req.body
    const updated = await UsersService.updateProfile(userId, { bio, avatarUrl, coverUrl })
    return successResponse(res, updated, 'Profile updated successfully')
  }),
}
