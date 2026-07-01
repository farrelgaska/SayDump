import { Router } from 'express'
import { ReactionsController } from './reactions.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const reactionsRouter = Router()

reactionsRouter.post('/:dumpId', authMiddleware as any, ReactionsController.toggle)
