import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import RightPanel from './RightPanel'
import MobileNav from './MobileNav'
import PageContainer from './PageContainer'

export default function AppShell() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-text-primary font-sans relative">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:w-64 border-r border-border bg-surface sticky top-0 h-screen flex-col flex-shrink-0 z-20">
        <Sidebar />
      </aside>

      {/* Main workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar header */}
        <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-md">
          <TopBar />
        </header>

        {/* Content area: Center Feed & Right Panel */}
        <div className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 gap-6">
          <main className="flex-1 min-w-0">
            <PageContainer>
              <Outlet />
            </PageContainer>
          </main>
          
          {/* Right Panel for discovery */}
          <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-20">
              <RightPanel />
            </div>
          </aside>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden sticky bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur-md">
          <MobileNav />
        </nav>
      </div>
    </div>
  )
}
