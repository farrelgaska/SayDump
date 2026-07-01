import { Router } from 'express'
import { BookmarksController } from './bookmarks.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'

export const bookmarksRouter = Router()

bookmarksRouter.get('/', authMiddleware as any, BookmarksController.getAll)
bookmarksRouter.post('/:dumpId', authMiddleware as any, BookmarksController.toggle)
