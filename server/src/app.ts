import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { apiRouter } from './routes.js'
import { errorHandler } from './middlewares/error.middleware.js'
import { notFoundHandler } from './middlewares/notFound.middleware.js'

const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API router prefix
app.use('/api/v1', apiRouter)

// Error handling middleware
app.use(notFoundHandler)
app.use(errorHandler)

export default app
