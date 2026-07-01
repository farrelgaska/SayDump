import { Router } from 'express'
import { UsersController } from './users.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const usersRouter = Router()

usersRouter.get('/:username', UsersController.getProfile)
usersRouter.patch('/profile', authMiddleware as any, UsersController.updateProfile)
