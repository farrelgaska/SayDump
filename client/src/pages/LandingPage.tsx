import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, MessageCircle, Heart, Shield } from 'lucide-react'
import { Button } from '../components/ui/Button'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-text-primary font-sans relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-purple/5 blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent-pink/5 blur-[140px] -z-10 animate-pulse" />

      {/* Noise pattern background overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/noise.svg')] opacity-[0.05] pointer-events-none -z-10" />

      {/* Header bar */}
      <header className="max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-9 w-9 rounded-xl bg-accent-lime flex items-center justify-center shadow-lg shadow-accent-lime/10">
            <span className="font-outfit font-black text-background text-lg">S</span>
          </div>
          <span className="font-outfit font-black text-lg text-text-primary">SayDump</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto w-full px-6 text-center py-16 sm:py-24 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-[10px] font-bold uppercase tracking-wider text-accent-purple mb-6">
          <Sparkles className="h-3.5 w-3.5 text-accent-pink" />
          <span>No filters, just raw thoughts</span>
        </div>

        <h1 className="font-outfit font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-none mb-6">
          Dump Your Mind.<br />
          <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-lime bg-clip-text text-transparent">
            Express Your True Self.
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto leading-relaxed mb-8">
          SayDump is the ultimate aesthetic content dumping space where users speak raw, assign moods, tags, and topics, and connect with like-minded thinkers.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate('/feed')} className="gap-2 group">
            <span>Explore Feed</span>
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Feature Grid preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          <div className="p-5 rounded-2xl bg-surface border border-border text-left hover:border-accent-purple/30 transition-all duration-300">
            <MessageCircle className="h-5 w-5 text-accent-purple mb-3" />
            <h3 className="text-xs font-bold text-text-primary mb-1.5">Mood Assignment</h3>
            <p className="text-[10px] text-text-muted leading-normal">Tag posts with emotions like happy, sad, angry or excited to describe how you feel.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-left hover:border-accent-pink/30 transition-all duration-300">
            <Heart className="h-5 w-5 text-accent-pink mb-3" />
            <h3 className="text-xs font-bold text-text-primary mb-1.5">True Engagement</h3>
            <p className="text-[10px] text-text-muted leading-normal">Comment and react using customized emoji blocks that resonate with writer moods.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-left hover:border-accent-lime/30 transition-all duration-300">
            <Shield className="h-5 w-5 text-accent-lime mb-3" />
            <h3 className="text-xs font-bold text-text-primary mb-1.5">Minimalist Workspace</h3>
            <p className="text-[10px] text-text-muted leading-normal">Write seamlessly without bulky interfaces in a rich, distraction-free markdown canvas.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-[10px] text-text-muted/50 z-10">
        <p>© 2026 SayDump platform. All rights dumped.</p>
      </footer>
    </div>
  )
}
