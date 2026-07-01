import React from 'react'
import { Bell, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/providers/AuthProvider'

export default function TopBar() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="h-16 flex items-center justify-between px-4 sm:px-6 w-full text-text-primary">
      {/* Search Input */}
      <div className="flex-1 max-w-md hidden sm:block">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted/65" />
          <input
            type="text"
            placeholder="Search topics, tags or dumps..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-surface border border-border text-text-primary placeholder-text-text-muted/40 focus:outline-none focus:border-accent-purple/50 transition-all duration-200"
          />
        </div>
      </div>

      {/* Brand logo for mobile header */}
      <div className="flex items-center gap-2.5 sm:hidden cursor-pointer" onClick={() => navigate('/feed')}>
        <div className="h-7 w-7 rounded-lg bg-accent-lime flex items-center justify-center">
          <span className="font-outfit font-black text-background text-sm">S</span>
        </div>
        <h1 className="font-outfit font-bold text-sm text-text-primary">SayDump</h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3.5 ml-auto">
        <button className="h-8.5 w-8.5 flex items-center justify-center rounded-xl bg-surface border border-border hover:bg-surface-hover text-text-muted hover:text-text-primary transition-all duration-200 relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-accent-purple" />
        </button>

        {user && (
          <div 
            onClick={() => navigate(`/profile/${user.username}`)}
            className="flex items-center gap-2.5 pl-2 border-l border-border cursor-pointer group"
          >
            <div className="h-8 w-8 rounded-full bg-surface-hover overflow-hidden border border-border group-hover:border-accent-purple/50 transition-colors">
              <img 
                src={user.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'} 
                alt={user.username} 
                className="h-full w-full object-cover" 
              />
            </div>
            <span className="text-xs font-semibold text-text-muted group-hover:text-text-primary transition-colors hidden md:block">
              @{user.username}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
