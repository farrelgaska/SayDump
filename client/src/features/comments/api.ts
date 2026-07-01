import { CommentFeatureData } from './types'

export const commentsApi = {
  getComments: async (dumpId: string): Promise<CommentFeatureData[]> => {
    return []
  },
  createComment: async (content: string, dumpId: string): Promise<CommentFeatureData> => {
    return {
      id: 'stub',
      content,
      dumpId,
      authorId: 'stub',
      createdAt: new Date().toISOString(),
    }
  },
}
