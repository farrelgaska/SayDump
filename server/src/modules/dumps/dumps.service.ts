import { DumpsRepository } from './dumps.repository.js'
import { calculateReadingTime } from '../../utils/readingTime.js'

export const DumpsService = {
  getAll: async () => {
    return DumpsRepository.findAll()
  },

  create: async (data: { title: string; content: string; mood?: string; topicId: string; authorId: string }) => {
    const readingTime = calculateReadingTime(data.content)
    return DumpsRepository.create({
      ...data,
      readingTime,
    })
  },

  getById: async (id: string) => {
    return DumpsRepository.findById(id)
  },

  delete: async (id: string, authorId: string) => {
    return DumpsRepository.delete(id, authorId)
  },
}
