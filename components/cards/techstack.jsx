'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
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
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const icons = [
    'react',
    'express',
    'mongodb',
    'nodejs',
    'nextjs',
    'tailwindcss',
    'expo',
    'shadcnui',
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Techstack</CardTitle>
        <CardDescription>
          MERN stack and React Native Expo are my main tech choices.
        </CardDescription>
      </CardHeader>
      <div className="flex justify-center items-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {icons.map((icon, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="m-2 p-6 shadow-none">
                    <CardContent className="flex aspect-square w-50 h-50 items-center justify-center p-14">
                      <Image
                        src={`/examples/techstack/${icon}-${resolvedTheme}.svg`}
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
          <CarouselPrevious className="absolute sm:left-0 ml-6" />
          <CarouselNext className="absolute m:right-0 mr-6" />
        </Carousel>
      </div>
    </Card>
  )
}
