import { Request, Response } from 'express'
import { CommentsService } from './comments.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const CommentsController = {
  getByDumpId: asyncHandler(async (req: Request, res: Response) => {
    const { dumpId } = req.params
    const comments = await CommentsService.getByDumpId(dumpId)
    return successResponse(res, comments)
  }),

  create: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { content, dumpId } = req.body
    const newComment = await CommentsService.create({ content, dumpId, authorId: userId })
    return successResponse(res, newComment, 'Comment added successfully', 201)
  }),
}
