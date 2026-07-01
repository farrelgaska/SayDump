import React, { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(Number((window.scrollY / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#0D0D10] z-50">
      <div
        className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-lime transition-all duration-75"
        style={{ width: `${completion}%` }}
      />
    </div>
  )
}
