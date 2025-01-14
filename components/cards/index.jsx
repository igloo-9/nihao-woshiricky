import { CardsEducation } from '@/components/cards/education'
import { CardsTechstack } from '@/components/cards/techstack'
import { CardsSocialMedia } from '@/components/cards/social-media'
import { CardsCalendar } from '@/components/cards/calendar'

export function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-8">
      <div className="space-y-4 lg:col-span-5 xl:col-span-5 xl:space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-[45%_55%]">
          <div className="self-start">
            <CardsEducation />
          </div>
          <div className="self-start">
            <CardsTechstack />
          </div>
        </div>
      </div>
      <div className="space-y-4 lg:col-span-5 xl:col-span-6 xl:space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-[55%_45%]">
          <div className="self-start">
            <CardsSocialMedia />
          </div>
          <div className="self-start">
            <CardsCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}
