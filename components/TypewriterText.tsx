'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
}

export default function TypewriterText({ text, className = '', speed = 80 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-5 bg-yf-primary-600 ml-1 animate-pulse"></span>
      )}
    </span>
  )
}
