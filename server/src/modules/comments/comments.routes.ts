import { Router } from 'express'
import { CommentsController } from './comments.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const commentsRouter = Router()

commentsRouter.get('/dump/:dumpId', CommentsController.getByDumpId)
commentsRouter.post('/', authMiddleware as any, CommentsController.create)
