import { DumpFeaturePost } from './types'

export const dumpsApi = {
  getDumps: async (): Promise<DumpFeaturePost[]> => {
    return []
  },
  createDump: async (data: Partial<DumpFeaturePost>): Promise<DumpFeaturePost> => {
    return {
      id: 'stub',
      title: data.title || '',
      content: data.content || '',
      mood: data.mood || 'neutral',
      createdAt: new Date().toISOString(),
    }
  },
}
