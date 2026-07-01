import { Router } from 'express'
import { AuthController } from './auth.controller.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'
import { validate } from '../../middlewares/validate.middleware.js'
import { registerSchema, loginSchema } from './auth.validation.js'

export const authRouter = Router()

authRouter.post('/register', validate(registerSchema), AuthController.register)
authRouter.post('/login', validate(loginSchema), AuthController.login)
authRouter.get('/me', authMiddleware as any, AuthController.getMe)
