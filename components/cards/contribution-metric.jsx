'use client'

import { Line, LineChart, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { name: 'Dec', contribution: 38 },
  { name: 'Jan', contribution: 80 },
  { name: 'Feb', contribution: 0 },
  { name: 'Mar', contribution: 0 },
  { name: 'Apr', contribution: 0 },
  { name: 'May', contribution: 0 },
  { name: 'Jun', contribution: 0 },
]

const chartConfig = {
  today: {
    label: 'Today',
    color: 'hsl(var(--primary))',
  },
  contribution: {
    label: 'Contribution',
    color: 'hsl(var(--primary))',
  },
}

export function CardsMetric() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution</CardTitle>
        <CardDescription>
          My GitHub activities over the past couple months.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="w-full md:h-[200px]">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" className="hidden" />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="contribution"
              stroke="var(--color-today)"
              activeDot={{
                r: 6,
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
