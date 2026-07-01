import { CommentsRepository } from './comments.repository.js'

export const CommentsService = {
  getByDumpId: async (dumpId: string) => {
    return CommentsRepository.findByDumpId(dumpId)
  },

  create: async (data: { content: string; dumpId: string; authorId: string }) => {
    return CommentsRepository.create(data)
  },
}
