import { ReactionFeatureData } from './types'

export const reactionsApi = {
  addReaction: async (dumpId: string, type: string): Promise<ReactionFeatureData> => {
    return {
      id: 'stub',
      type,
      dumpId,
      createdAt: new Date().toISOString(),
    }
  },
}
