import { CorsOptions } from 'cors'
import { config } from './env.js'

export const corsOptions: CorsOptions = {
  origin: config.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
