'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CardsEducation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm font-semibold">M.S. in Computer Science</p>
        <p className="text-xs text-muted-foreground">
          UC San Diego 2022 - 2024
        </p>
      </CardContent>
      <CardContent className="space-y-2">
        <p className="text-sm font-semibold">B.S. in Computer Science</p>
        <p className="text-xs text-muted-foreground">
          Purdue University 2018 - 2022
        </p>
      </CardContent>
      <CardContent className="space-y-2">
        <p className="text-sm font-semibold">Honor Society</p>
        <p className="text-xs text-muted-foreground">
          Phi Beta Kappa 2022 - Present
        </p>
      </CardContent>
    </Card>
  )
}
