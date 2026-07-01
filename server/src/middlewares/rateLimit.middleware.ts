import { Request, Response, NextFunction } from 'express'

const ipRequestMap = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(limitCount = 100, windowMs = 15 * 60 * 1000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown'
    const now = Date.now()

    const requestData = ipRequestMap.get(ip)

    if (!requestData || now > requestData.resetTime) {
      ipRequestMap.set(ip, {
        count: 1,
        resetTime: now + windowMs,
      })
      return next()
    }

    requestData.count++

    if (requestData.count > limitCount) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      })
    }

    next()
  }
}
