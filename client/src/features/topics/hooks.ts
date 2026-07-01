import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { Topic } from '../../types/topic'

export function useTopicsQuery() {
  return useQuery({
    queryKey: ['topics'],
    queryFn: async (): Promise<Topic[]> => {
      const response = await apiClient.get('/topics')
      return response.data.data
    },
  })
}

export function useTopicDetailQuery(slug: string) {
  return useQuery({
    queryKey: ['topic', slug],
    queryFn: async (): Promise<Topic> => {
      const response = await apiClient.get(`/topics/${slug}`)
      return response.data.data
    },
    enabled: !!slug,
  })
}
