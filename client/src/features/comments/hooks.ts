import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { Comment } from '../../types/dump'

export function useCommentsQuery(dumpId: string) {
  return useQuery({
    queryKey: ['comments', dumpId],
    queryFn: async (): Promise<Comment[]> => {
      const response = await apiClient.get(`/dumps/${dumpId}/comments`)
      return response.data.data
    },
    enabled: !!dumpId,
  })
}

export function useCreateCommentMutation(dumpId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (content: string) => {
      const response = await apiClient.post(`/dumps/${dumpId}/comments`, { content })
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', dumpId] })
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
      queryClient.invalidateQueries({ queryKey: ['dump', dumpId] })
    },
  })
}
