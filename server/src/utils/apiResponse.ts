import { Response } from 'express'

export function successResponse<T>(
  res: Response,
  data: T,
  message = 'Success',
  status = 200
) {
  return res.status(status).json({
    success: true,
    message,
    data,
  })
}

export function errorResponse(
  res: Response,
  message = 'An error occurred',
  status = 500,
  errors?: any
) {
  return res.status(status).json({
    success: false,
    message,
    errors,
  })
}
