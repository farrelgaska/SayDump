import { Request, Response } from 'express'
import { TopicsService } from './topics.service.js'
import { successResponse } from '../../utils/apiResponse.js'
import { asyncHandler } from '../../utils/asyncHandler.js'

export const TopicsController = {
  getAll: asyncHandler(async (req: Request, res: Response) => {
    const list = await TopicsService.getAll()
    return successResponse(res, list)
  }),

  getBySlug: asyncHandler(async (req: Request, res: Response) => {
    const { slug } = req.params
    const topic = await TopicsService.getBySlug(slug)
    return successResponse(res, topic)
  }),
}
