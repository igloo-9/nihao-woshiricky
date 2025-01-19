'use client'

import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function DevAlert() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className="w-fit fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col space-y-8 items-center">
          <Alert className="sm:pr-16">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="hidden sm:block">Sorry</AlertTitle>
            <AlertDescription>
              <div className="hidden sm:block">
                This part of the site is still under development...
              </div>
              <div className="sm:hidden">Not ready yet :(</div>
            </AlertDescription>
          </Alert>
          <Button
            onClick={handleBack}
            variant="outline"
            className="w-fit rounded-full"
          >
            <div className="hidden sm:block">Back</div>
            <div className="sm:hidden">
              <Image
                src={`back-${resolvedTheme}.svg`}
                width={15}
                height={15}
                alt="Back Icon"
              />
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}
