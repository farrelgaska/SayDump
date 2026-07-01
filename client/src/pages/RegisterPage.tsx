import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { useRegisterMutation } from '../features/auth/hooks'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const registerMutation = useRegisterMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !email || !password) {
      setError('Please provide username, email, and password.')
      return
    }

    registerMutation.mutate(
      { username, email, password },
      {
        onSuccess: () => {
          navigate('/feed')
        },
        onError: (err: any) => {
          setError(err.response?.data?.message || 'Registration failed.')
        },
      }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text-primary font-sans p-4 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-accent-purple/5 blur-[80px]" />
      <div className="absolute inset-0 bg-[url('/src/assets/noise.svg')] opacity-[0.04] pointer-events-none -z-10" />

      <Card className="w-full max-w-sm p-8 z-10 space-y-6">
        <div className="text-center">
          <div
            onClick={() => navigate('/')}
            className="h-10 w-10 rounded-xl bg-accent-lime flex items-center justify-center shadow-lg shadow-accent-lime/10 mx-auto mb-4 cursor-pointer"
          >
            <span className="font-outfit font-black text-background text-lg">S</span>
          </div>
          <h2 className="font-outfit font-black text-lg text-text-primary">Join SayDump</h2>
          <p className="text-[10px] text-text-muted mt-1">Create an account to dump your expressions</p>
        </div>

        {error && (
          <div className="p-3 bg-accent-pink/10 border border-accent-pink/20 rounded-xl text-[10px] font-semibold text-accent-pink text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Username</label>
            <Input
              type="text"
              placeholder="e.g. johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={registerMutation.isPending}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Email Address</label>
            <Input
              type="email"
              placeholder="e.g. john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={registerMutation.isPending}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={registerMutation.isPending}
            />
          </div>

          <Button type="submit" disabled={registerMutation.isPending} size="md" className="w-full mt-2">
            {registerMutation.isPending ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <div className="text-center text-[10px] text-text-muted pt-2 border-t border-border">
          <span>Already have an account? </span>
          <Link to="/login" className="text-accent-purple font-bold hover:underline">
            Log in
          </Link>
        </div>
      </Card>
    </div>
  )
}
