'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CardsSocialMedia() {
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
        <CardTitle>Social Media</CardTitle>
        <CardDescription>
          Welcome to connect with me on the platforms below.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">Instagram</p>
              <p className="text-sm text-muted-foreground">@ikcyr_</p>
            </div>
          </div>
          <Link
            href={process.env.NEXT_PUBLIC_IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="xl" variant="ghost">
              <Image
                src={`/examples/link-${resolvedTheme}.svg`}
                width={24}
                height={24}
                alt="Instagram Icon"
                className="m-2"
              ></Image>
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">TikTok</p>
              <p className="text-sm text-muted-foreground">@igloo-9</p>
            </div>
          </div>
          <Link
            href={process.env.NEXT_PUBLIC_TT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="xl" variant="ghost">
              <Image
                src={`/examples/link-${resolvedTheme}.svg`}
                width={24}
                height={24}
                alt="TikTok Icon"
                className="m-2"
              ></Image>
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">Xiaohongshu</p>
              <p className="text-sm text-muted-foreground">@ikcyr</p>
            </div>
          </div>
          <Link
            href={process.env.NEXT_PUBLIC_XHS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="xl" variant="ghost">
              <Image
                src={`/examples/link-${resolvedTheme}.svg`}
                width={24}
                height={24}
                alt="XHS Icon"
                className="m-2"
              ></Image>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
