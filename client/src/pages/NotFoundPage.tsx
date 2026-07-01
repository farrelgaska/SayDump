import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary font-sans p-6 text-center">
      {/* Noise background grain */}
      <div className="absolute inset-0 bg-[url('/src/assets/noise.svg')] opacity-[0.04] pointer-events-none -z-10" />

      <div className="h-16 w-16 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mb-6 animate-bounce">
        <span className="font-outfit font-black text-xl">404</span>
      </div>

      <h1 className="font-outfit font-black text-xl text-text-primary mb-2">Gravity Failed Here</h1>
      <p className="text-xs text-text-muted max-w-sm mb-6 leading-relaxed">
        The content dump you are trying to reach has drifted out of orbit, or never existed in the first place.
      </p>

      <Button onClick={() => navigate('/feed')} size="md" className="gap-2">
        <Home className="h-4 w-4" />
        <span>Return to Feed</span>
      </Button>
    </div>
  )
}
