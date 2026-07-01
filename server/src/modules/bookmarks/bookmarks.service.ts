import { BookmarksRepository } from './bookmarks.repository.js'

export const BookmarksService = {
  getAll: async (userId: string) => {
    return BookmarksRepository.findAllByUser(userId)
  },

  toggle: async (userId: string, dumpId: string) => {
    return BookmarksRepository.toggle(userId, dumpId)
  },
}
