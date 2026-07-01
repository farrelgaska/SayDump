import { BookmarkFeatureData } from './types'

export const bookmarksApi = {
  getBookmarks: async (): Promise<BookmarkFeatureData[]> => {
    return []
  },
  toggleBookmark: async (dumpId: string): Promise<boolean> => {
    return true
  },
}
