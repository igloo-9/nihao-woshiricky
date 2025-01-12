import { CardsEducation } from '@/components/cards/education'
import { CardsTechstack } from '@/components/cards/techstack'
import { CardsCalendar } from '@/components/cards/calendar'

export function CardsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardsEducation />
      <CardsTechstack />
      <CardsCalendar />
    </div>
  )
}
