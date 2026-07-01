import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, AlertCircle, CheckCircle } from 'lucide-react'

export type ToastType = 'info' | 'success' | 'error'

export interface ToastItem {
  id: string
  message: string
  type: ToastType
}

interface ToastProps {
  toasts: ToastItem[]
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastProps) {
  const icons = {
    info: <Info className="h-4 w-4 text-accent-purple" />,
    success: <CheckCircle className="h-4 w-4 text-accent-lime" />,
    error: <AlertCircle className="h-4 w-4 text-accent-pink" />,
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border shadow-2xl text-xs text-text-primary"
          >
            {icons[toast.type]}
            <p className="flex-1 font-medium">{toast.message}</p>
            <button
              onClick={() => onRemove(toast.id)}
              className="rounded-lg p-0.5 text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
