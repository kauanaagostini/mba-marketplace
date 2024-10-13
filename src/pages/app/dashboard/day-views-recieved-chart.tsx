import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

const data = {
  viewsPerDay: [
    {
      date: new Date('2024-09-12T03:00:00.000Z'),
      amount: 2,
    },
    {
      date: new Date('2024-09-13T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-09-14T03:00:00.000Z'),
      amount: 2,
    },
    {
      date: new Date('2024-09-15T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-09-16T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-17T03:00:00.000Z'),
      amount: 0,
    },
    {
      date: new Date('2024-09-18T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-09-19T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-09-20T03:00:00.000Z'),
      amount: 2,
    },
    {
      date: new Date('2024-09-21T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-22T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-23T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-24T03:00:00.000Z'),
      amount: 2,
    },
    {
      date: new Date('2024-09-25T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-09-26T03:00:00.000Z'),
      amount: 0,
    },
    {
      date: new Date('2024-09-27T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-28T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-29T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-09-30T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-10-01T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-10-02T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-10-03T03:00:00.000Z'),
      amount: 1,
    },
    {
      date: new Date('2024-10-04T03:00:00.000Z'),
      amount: 3,
    },
    {
      date: new Date('2024-10-05T03:00:00.000Z'),
      amount: 2,
    },
    {
      date: new Date('2024-10-06T03:00:00.000Z'),
      amount: 0,
    },
    {
      date: new Date('2024-10-07T03:00:00.000Z'),
      amount: 0,
    },
  ],
}

export function DayViewsRecievedChart() {
  return (
    <Card className="rounded-lg border-none shadow-none">
      <CardHeader className="text-lg font-semibold text-secondary-foreground">
        Visitantes
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data.viewsPerDay} style={{ fontSize: 12 }}>
            <CartesianGrid strokeDasharray="7 7" vertical={false} />
            <Tooltip cursor={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={16}
              tickFormatter={(value: Date) =>
                value.toLocaleDateString('pt-BR', { day: '2-digit' })
              }
            />
            <YAxis
              stroke="hsl(var(--muted))"
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Line
              stroke="hsl(var(--popover-hover))"
              type="monotone"
              strokeWidth={3}
              dataKey="amount"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
