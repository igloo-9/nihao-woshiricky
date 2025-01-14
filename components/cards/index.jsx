'use client'

import { useState, useEffect } from 'react'

import { CardsEducation } from '@/components/cards/education'
import { CardsTechstack } from '@/components/cards/techstack'
import { CardsCalendar } from '@/components/cards/calendar'

export function CardsDemo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardsEducation />
      <CardsTechstack />
      <CardsCalendar />
    </div>
  )
}
