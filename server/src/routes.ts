import { Router } from 'express'
import { authRouter } from './modules/auth/auth.routes.js'
import { usersRouter } from './modules/users/users.routes.js'
import { dumpsRouter } from './modules/dumps/dumps.routes.js'
import { commentsRouter } from './modules/comments/comments.routes.js'
import { bookmarksRouter } from './modules/bookmarks/bookmarks.routes.js'
import { reactionsRouter } from './modules/reactions/reactions.routes.js'
import { topicsRouter } from './modules/topics/topics.routes.js'
import { followsRouter } from './modules/follows/follows.routes.js'

export const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/users', usersRouter)
apiRouter.use('/dumps', dumpsRouter)
apiRouter.use('/comments', commentsRouter)
apiRouter.use('/bookmarks', bookmarksRouter)
apiRouter.use('/reactions', reactionsRouter)
apiRouter.use('/topics', topicsRouter)
apiRouter.use('/follows', followsRouter)
