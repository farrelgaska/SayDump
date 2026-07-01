import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../../lib/apiClient'
import { useAuth } from '../../app/providers/AuthProvider'
import { LoginInput, RegisterInput } from './types'

export function useLoginMutation() {
  const { login } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await apiClient.post('/auth/login', data)
      return response.data.data
    },
    onSuccess: (data) => {
      login(data.token, data.user)
      queryClient.invalidateQueries({ queryKey: ['auth-user'] })
    },
  })
}

export function useRegisterMutation() {
  const { login } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const response = await apiClient.post('/auth/register', data)
      return response.data.data
    },
    onSuccess: (data) => {
      login(data.token, data.user)
      queryClient.invalidateQueries({ queryKey: ['auth-user'] })
    },
  })
}
