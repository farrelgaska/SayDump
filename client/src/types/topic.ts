export interface Topic {
  id: string
  name: string
  slug: string
  description?: string
  createdAt: string
  _count?: {
    dumps: number
  }
}
