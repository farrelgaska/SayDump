import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { User } from '../../types/user'

export function useUserProfileQuery(username: string) {
  return useQuery({
    queryKey: ['user-profile', username],
    queryFn: async (): Promise<User> => {
      const response = await apiClient.get(`/users/${username}`)
      return response.data.data
    },
    enabled: !!username,
  })
}

export function useUpdateProfileMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { bio?: string; avatarUrl?: string; coverUrl?: string }) => {
      const response = await apiClient.patch('/users/profile', data)
      return response.data.data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user-profile', data.username] })
      queryClient.invalidateQueries({ queryKey: ['auth-user'] })
    },
  })
}

export function useToggleFollowMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userId: string) => {
      const response = await apiClient.post(`/follows/user/${userId}`)
      return response.data.data
    },
    onSuccess: (data, userId) => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      queryClient.invalidateQueries({ queryKey: ['dumps'] })
    },
  })
}
