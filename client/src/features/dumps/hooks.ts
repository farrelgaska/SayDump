import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { Dump } from '../../types/dump'

export interface DumpsQueryParams {
  topic?: string
  mood?: string
  authorId?: string
  search?: string
}

export function useDumpsQuery(params: DumpsQueryParams = {}) {
  return useQuery({
    queryKey: ['dumps', params],
    queryFn: async (): Promise<Dump[]> => {
      const response = await apiClient.get('/dumps', { params })
      return response.data.data
    },
  })
}

export function useDumpDetailQuery(id: string) {
  return useQuery({
    queryKey: ['dump', id],
    queryFn: async (): Promise<Dump> => {
      const response = await apiClient.get(`/dumps/${id}`)
      return response.data.data
    },
    enabled: !!id,
  })
}

export function useCreateDumpMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { title: string; content: string; mood: string; topicId: string }) => {
      const response = await apiClient.post('/dumps', data)
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
    },
  })
}

export function useDeleteDumpMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/dumps/${id}`)
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
    },
  })
}
