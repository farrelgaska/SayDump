import React from 'react'
import { CloudLightning, Check } from 'lucide-react'

export default function DraftStatus({ isSaved = true }: { isSaved?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-[10px] text-slate-500">
      {isSaved ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-450" />
          <span>All changes saved to cloud</span>
        </>
      ) : (
        <>
          <CloudLightning className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
          <span>Unsaved changes in workspace</span>
        </>
      )}
    </div>
  )
}
