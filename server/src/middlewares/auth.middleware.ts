import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string
    username: string
    email: string
  }
}

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access. Authorization token required.',
    })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as {
      id: string
      username: string
      email: string
    }
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access. Invalid or expired token.',
    })
  }
}
