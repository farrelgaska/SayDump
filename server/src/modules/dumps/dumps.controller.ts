import { Request, Response } from 'express'
import { DumpsService } from './dumps.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'
import { AuthenticatedRequest } from '../../middlewares/auth.middleware.js'

export const DumpsController = {
  getAll: asyncHandler(async (req: Request, res: Response) => {
    const list = await DumpsService.getAll()
    return successResponse(res, list)
  }),

  create: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { title, content, mood, topicId } = req.body
    const newDump = await DumpsService.create({ title, content, mood, topicId, authorId: userId })
    return successResponse(res, newDump, 'Dump created successfully', 201)
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params
    const dump = await DumpsService.getById(id)
    return successResponse(res, dump)
  }),

  delete: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id || 'u-me'
    const { id } = req.params
    await DumpsService.delete(id, userId)
    return successResponse(res, null, 'Dump deleted successfully')
  }),
}
