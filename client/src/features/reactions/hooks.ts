import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'

export function useAddReactionMutation(dumpId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (type: string) => {
      const response = await apiClient.post(`/dumps/${dumpId}/reactions`, { type })
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
      queryClient.invalidateQueries({ queryKey: ['dump', dumpId] })
    },
  })
}
