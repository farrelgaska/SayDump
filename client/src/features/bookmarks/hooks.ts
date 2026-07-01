import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { Dump } from '../../types/dump'

export function useBookmarksQuery() {
  return useQuery({
    queryKey: ['bookmarks'],
    queryFn: async (): Promise<Dump[]> => {
      const response = await apiClient.get('/bookmarks')
      return response.data.data
    },
  })
}

export function useToggleBookmarkMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (dumpId: string) => {
      const response = await apiClient.post(`/bookmarks/${dumpId}`)
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
    },
  })
}
