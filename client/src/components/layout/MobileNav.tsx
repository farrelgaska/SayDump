import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Bookmark, PlusCircle, User, Hash } from 'lucide-react'
import { useAuth } from '../../app/providers/AuthProvider'

export default function MobileNav() {
  const { user } = useAuth()

  return (
    <div className="flex items-center justify-around h-14 px-2 bg-surface text-text-primary">
      <NavLink
        to="/feed"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-12 h-full text-[10px] ${
            isActive ? 'text-accent-purple' : 'text-text-muted'
          }`
        }
      >
        <Home className="h-5 w-5" />
      </NavLink>

      <NavLink
        to="/topics"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-12 h-full text-[10px] ${
            isActive ? 'text-accent-purple' : 'text-text-muted'
          }`
        }
      >
        <Hash className="h-5 w-5" />
      </NavLink>

      <NavLink
        to="/write"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-12 h-full text-[10px] ${
            isActive ? 'text-accent-purple' : 'text-text-muted'
          }`
        }
      >
        <PlusCircle className="h-6 w-6" />
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-12 h-full text-[10px] ${
            isActive ? 'text-accent-purple' : 'text-text-muted'
          }`
        }
      >
        <Bookmark className="h-5 w-5" />
      </NavLink>

      <NavLink
        to={user ? `/profile/${user.username}` : '/login'}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-12 h-full text-[10px] ${
            isActive ? 'text-accent-purple' : 'text-text-muted'
          }`
        }
      >
        <User className="h-5 w-5" />
      </NavLink>
    </div>
  )
}
