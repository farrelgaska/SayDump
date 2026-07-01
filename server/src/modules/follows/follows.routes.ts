import { Router } from 'express'
import { FollowsController } from './follows.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const followsRouter = Router()

followsRouter.post('/user/:userId', authMiddleware as any, FollowsController.toggleFollow)
