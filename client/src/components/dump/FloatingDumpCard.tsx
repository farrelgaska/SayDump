import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

export default function FloatingDumpCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card>{children}</Card>
    </motion.div>
  )
}
