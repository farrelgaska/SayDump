export interface ServerApiResponse<T> {
  success: boolean
  message?: string
  data?: T
  errors?: any
}

export interface ServerPaginatedResponse<T> {
  success: boolean
  message?: string
  data: T[]
  meta: {
    page: number
    limit: number
    totalItems: number
    totalPages: number
  }
}
