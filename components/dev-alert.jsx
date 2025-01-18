'use client'

import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export function DevAlert() {
  const handleBack = () => {
    window.history.back()
  }

  return (
    <>
      <Button
        onClick={handleBack}
        className="fixed top-8 left-6"
        variant="outline"
      >
        Back
      </Button>
      <div className="w-fit fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Alert className="pr-16">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Sorry</AlertTitle>
          <AlertDescription>
            This part of the site is still under development...
          </AlertDescription>
        </Alert>
      </div>
    </>
  )
}
