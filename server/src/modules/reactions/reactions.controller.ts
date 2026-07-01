import { Response } from 'express'
import { ReactionsService } from './reactions.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const ReactionsController = {
  toggle: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { dumpId } = req.params
    const { type } = req.body
    const result = await ReactionsService.toggle(userId, dumpId, type || 'like')
    return successResponse(res, result, 'Reaction updated successfully')
  }),
}
