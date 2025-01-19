import { CardsEducation } from '@/components/cards/education'
import { CardsTechstack } from '@/components/cards/techstack'
import { CardsSocialMedia } from '@/components/cards/social-media'
import { CardsCalendar } from '@/components/cards/calendar'
import { CardsHobbies } from '@/components/cards/hobbies'
import { CardsMetric } from '@/components/cards/contribution-metric'
import { CardsMessaging } from '@/components/cards/messaging'
import { CardsProjects } from '@/components/cards/projects'

export function CardsMobileDemo() {
  return (
    <div className="flex flex-col gap-4">
      <CardsMetric />
      <CardsEducation />
      <CardsTechstack />
      <CardsCalendar />
      <CardsProjects />
      <CardsSocialMedia />
      <CardsHobbies />
      <CardsMessaging />
    </div>
  )
}
