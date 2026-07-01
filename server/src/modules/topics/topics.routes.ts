import { Router } from 'express'
import { TopicsController } from './topics.controller.js'

export const topicsRouter = Router()

topicsRouter.get('/', TopicsController.getAll)
topicsRouter.get('/:slug', TopicsController.getBySlug)
