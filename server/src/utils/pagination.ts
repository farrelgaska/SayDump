import { Request } from 'express'

export interface PaginationParams {
  page: number
  limit: number
  skip: number
}

export function getPaginationParams(req: Request, defaultLimit = 10): PaginationParams {
  const page = parseInt(req.query.page as string, 10) || 1
  const limit = parseInt(req.query.limit as string, 10) || defaultLimit
  const skip = (page - 1) * limit

  return {
    page,
    limit,
    skip,
  }
}
