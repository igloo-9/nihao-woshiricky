import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CardsTechstack() {
  const icons = [
    'mongodb',
    'express',
    'react',
    'nodejs',
    'nextjs',
    'tailwindcss',
    'expo',
    'shadcnui',
  ]

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Techstack</CardTitle>
          <CardDescription>
            MERN stack and React Native Expo are my main tech choice.
          </CardDescription>
        </CardHeader>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {icons.map((icon, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="m-2 p-6">
                    <CardContent className="flex aspect-square w-50 h-50 items-center justify-center p-14">
                      <Image
                        src={`/examples/${icon}.svg`}
                        width={icon === 'mongodb' ? 50 : 75}
                        height={icon === 'mongodb' ? 50 : 75}
                        alt={`${icon} Icon`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 ml-6" />
          <CarouselNext className="absolute right-0 mr-6" />
        </Carousel>
      </Card>
    </div>
  )
}
