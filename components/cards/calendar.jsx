'use client'

import { differenceInDays } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const start = new Date(2024, 10, 9)
const today = new Date()
const daysDifference = differenceInDays(today, start)

export function CardsCalendar() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Day {daysDifference} in love w/ LLM</CardTitle>
      </CardHeader>
      <CardContent className="p-1 flex items-center justify-center">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={today}
          selected={{
            from: start,
            to: today,
          }}
        />
      </CardContent>
    </Card>
  )
}
