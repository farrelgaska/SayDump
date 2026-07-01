import { Response } from 'express'
import { FollowsService } from './follows.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const FollowsController = {
  toggleFollow: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const followerId = req.user?.id || 'u-me'
    const { userId: followingId } = req.params
    const result = await FollowsService.toggleFollow(followerId, followingId)
    return successResponse(res, result, 'Follow status updated successfully')
  }),
}
