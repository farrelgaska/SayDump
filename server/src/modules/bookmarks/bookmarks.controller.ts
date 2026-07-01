import { Response } from 'express'
import { BookmarksService } from './bookmarks.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const BookmarksController = {
  getAll: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const list = await BookmarksService.getAll(userId)
    return successResponse(res, list)
  }),

  toggle: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { dumpId } = req.params
    const result = await BookmarksService.toggle(userId, dumpId)
    return successResponse(res, result, 'Bookmark status updated')
  }),
}
