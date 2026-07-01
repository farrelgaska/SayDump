import React from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useTheme } from '../app/providers/ThemeProvider'

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="space-y-6 text-text-primary">
      <div>
        <h2 className="font-outfit font-black text-lg sm:text-xl text-text-primary">Settings</h2>
        <p className="text-[10px] text-text-muted">Configure your personal settings and layouts.</p>
      </div>

      <Card className="divide-y divide-border/60 p-6 space-y-4">
        {/* Theme select */}
        <div className="flex items-center justify-between py-4 first:pt-0">
          <div>
            <h4 className="text-xs font-bold text-text-primary">Aesthetic Theme</h4>
            <p className="text-[10px] text-text-muted mt-0.5">Toggle between dark night and light paper modes.</p>
          </div>
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            Current: {theme === 'dark' ? 'Night Mode' : 'Paper Mode'}
          </Button>
        </div>

        {/* Account privacy */}
        <div className="flex items-center justify-between py-4">
          <div>
            <h4 className="text-xs font-bold text-text-primary">Account Privacy</h4>
            <p className="text-[10px] text-text-muted mt-0.5">Keep dumps anonymous or visible in recommendations.</p>
          </div>
          <Button variant="secondary" size="sm">
            Configure
          </Button>
        </div>

        {/* Delete Account */}
        <div className="flex items-center justify-between py-4 last:pb-0">
          <div>
            <h4 className="text-xs font-bold text-accent-pink">Deactivate Profile</h4>
            <p className="text-[10px] text-text-muted mt-0.5">Permanently erase all your dumps and responses.</p>
          </div>
          <Button variant="danger" size="sm">
            Erase account
          </Button>
        </div>
      </Card>
    </div>
  )
}
