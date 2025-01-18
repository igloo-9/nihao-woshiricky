'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function CardsHobbies() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hobbies</CardTitle>
        <CardDescription>
          Gaming, reading, listening to music and watching movies are my
          hobbies.
        </CardDescription>
      </CardHeader>
      <div className="mb-4 flex flex-col space-y-4 items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between w-full px-6">
              <p className="text-sm font-medium leading-none">Gaming</p>
              <Button variant="ghost">
                <Image
                  src={`/examples/more-${resolvedTheme}.svg`}
                  width={18}
                  height={18}
                  alt="More Icon"
                />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="right" className="w-64">
            <DropdownMenuLabel>Games I'm playing</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                League of Legends
                <DropdownMenuShortcut>igloo#iio9</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Stardew Valley</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between w-full px-6">
              <p className="text-sm font-medium leading-none">Movies</p>
              <Button variant="ghost">
                <Image
                  src={`/examples/more-${resolvedTheme}.svg`}
                  width={18}
                  height={18}
                  alt="More Icon"
                />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Movies I love</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>The Great Gatsby</DropdownMenuItem>
              <DropdownMenuItem>Titanic</DropdownMenuItem>
              <DropdownMenuItem>Blade Runner</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between w-full px-6">
              <p className="text-sm font-medium leading-none">Music</p>
              <Button variant="ghost">
                <Image
                  src={`/examples/more-${resolvedTheme}.svg`}
                  width={18}
                  height={18}
                  alt="More Icon"
                />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Artists and Groups</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                aespa
                <DropdownMenuShortcut>Kpop</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                KISS OF LIFE
                <DropdownMenuShortcut>Kpop</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Dreamcatcher
                <DropdownMenuShortcut>Kpop</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Milet
                <DropdownMenuShortcut>Jpop</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Aimer
                <DropdownMenuShortcut>Jpop</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between w-full px-6">
              <p className="text-sm font-medium leading-none">Books</p>
              <Button variant="ghost">
                <Image
                  src={`/examples/more-${resolvedTheme}.svg`}
                  width={18}
                  height={18}
                  alt="More Icon"
                />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-98">
            <DropdownMenuLabel>Books I'm reading</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Do Androids Dream of Electric Sheep?
                <DropdownMenuShortcut>Philip K. Dick</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Ubik
                <DropdownMenuShortcut>Philip K. Dick</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}
