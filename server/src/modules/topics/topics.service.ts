import { TopicsRepository } from './topics.repository.js'

export const TopicsService = {
  getAll: async () => {
    return TopicsRepository.findAll()
  },

  getBySlug: async (slug: string) => {
    return TopicsRepository.findBySlug(slug)
  },
}
