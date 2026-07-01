import { Router } from 'express'
import { DumpsController } from './dumps.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const dumpsRouter = Router()

dumpsRouter.get('/', DumpsController.getAll)
dumpsRouter.post('/', authMiddleware as any, DumpsController.create)
dumpsRouter.get('/:id', DumpsController.getById)
dumpsRouter.delete('/:id', authMiddleware as any, DumpsController.delete)
