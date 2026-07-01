import React, { createContext, useContext, useState, useEffect } from 'react'
import { apiClient } from '../../lib/apiClient'

interface AuthContextType {
  user: any | null
  token: string | null
  login: (token: string, userData: any) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
  setUser: React.Dispatch<React.SetStateAction<any | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('saydump_token')
      if (storedToken) {
        try {
          // Temporarily set token so apiClient interceptor attaches it
          setToken(storedToken)
          const response = await apiClient.get('/auth/me')
          const userData = response.data.data.user
          setUser(userData)
          localStorage.setItem('saydump_user', JSON.stringify(userData))
        } catch (err) {
          // Clear invalid/expired session
          localStorage.removeItem('saydump_token')
          localStorage.removeItem('saydump_user')
          setToken(null)
          setUser(null)
        }
      }
      setIsLoading(false)
    }

    initializeAuth()
  }, [])

  const login = (newToken: string, userData: any) => {
    localStorage.setItem('saydump_token', newToken)
    localStorage.setItem('saydump_user', JSON.stringify(userData))
    setToken(newToken)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('saydump_token')
    localStorage.removeItem('saydump_user')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
        isLoading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
