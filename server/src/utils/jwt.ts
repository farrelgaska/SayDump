import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'

export const jwtUtils = {
  sign: (payload: { id: string; username: string; email: string }): string => {
    return jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN as any,
    })
  },

  verify: (token: string): any => {
    return jwt.verify(token, config.JWT_SECRET)
  },
}
