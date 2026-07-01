import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, Bookmark, PlusCircle, User, Settings, Hash } from 'lucide-react'
import { useAuth } from '../../app/providers/AuthProvider'

export default function Sidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const navItems = [
    { label: 'Feed', href: '/feed', icon: Home },
    { label: 'Topics', href: '/topics', icon: Hash },
    { label: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
    { label: 'Write', href: '/write', icon: PlusCircle },
    { label: 'Profile', href: user ? `/profile/${user.username}` : '/login', icon: User },
    { label: 'Settings', href: '/settings', icon: Settings },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex flex-col h-full p-4 justify-between bg-surface text-text-primary">
      <div>
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 px-2 py-4 mb-6 cursor-pointer" onClick={() => navigate('/feed')}>
          <div className="h-9 w-9 rounded-xl bg-accent-lime flex items-center justify-center shadow-lg shadow-accent-lime/10">
            <span className="font-outfit font-black text-background text-lg">S</span>
          </div>
          <div>
            <h1 className="font-outfit font-black text-base leading-none text-text-primary">SayDump</h1>
            <span className="text-[9px] text-text-muted tracking-widest font-bold uppercase">Midnight Dump</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-xs font-semibold ${
                  isActive
                    ? 'bg-accent-purple/10 text-accent-purple border-l-2 border-accent-purple'
                    : 'text-text-muted hover:bg-surface-hover hover:text-text-primary'
                }`
              }
            >
              <item.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User Section at bottom */}
      <div className="border-t border-border pt-4">
        {user ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 px-2">
              <div className="h-8 w-8 rounded-full bg-surface-hover overflow-hidden border border-border">
                <img src={user.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'} alt={user.username} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-text-primary truncate">@{user.username}</p>
                <p className="text-[9px] text-text-muted truncate">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-xl text-[10px] text-accent-pink hover:bg-accent-pink/5 transition-colors font-bold uppercase tracking-wider"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="px-2">
            <button
              onClick={() => navigate('/login')}
              className="w-full text-center px-4 py-2.5 bg-accent-lime hover:bg-accent-lime/90 text-background rounded-xl text-xs font-bold transition-all duration-200 shadow-md shadow-accent-lime/10"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
