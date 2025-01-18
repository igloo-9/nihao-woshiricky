'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CardsProjects() {
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
        <CardTitle>Projects</CardTitle>
        <CardDescription>
          Feel free to test out my projects (any feedbacl is appreciated).
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">Lopi</p>
              <p className="text-sm text-muted-foreground">Under Development</p>
            </div>
          </div>
          <Button variant="outline" disabled={true}>
            -
          </Button>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">Tubing</p>
              <p className="text-sm text-muted-foreground">
                Down for Maintenance
              </p>
            </div>
          </div>
          <Button variant="outline" disabled={true}>
            -
          </Button>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">EYS Wiki</p>
              <p className="text-sm text-muted-foreground">Under Development</p>
            </div>
          </div>
          <Button variant="outline" disabled={true}>
            -
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
