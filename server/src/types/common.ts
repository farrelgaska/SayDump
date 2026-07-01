export type NodeEnv = 'development' | 'production' | 'test'

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}
