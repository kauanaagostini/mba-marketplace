import { useQuery } from '@tanstack/react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { getDayViewsRecieved } from '@/api/get-day-views-recieved'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CustomTooltipLabel } from '@/components/ui/custom-tooltip-label'

export function DayViewsRecievedChart() {
  const { data: dayViewsRecieved } = useQuery({
    queryKey: ['metrics', 'day-views-recieved'],
    queryFn: getDayViewsRecieved,
  })
  console.log(
    dayViewsRecieved?.viewsPerDay[0].date?.toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'long',
    }),
  )

  return (
    <Card className="rounded-lg border-none shadow-none">
      <CardHeader className="text-lg font-semibold text-secondary-foreground">
        Visitantes
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            data={dayViewsRecieved?.viewsPerDay}
            style={{ fontSize: 12 }}
          >
            <CartesianGrid strokeDasharray="7 7" vertical={false} />
            <Tooltip content={<CustomTooltipLabel />} cursor={false} />
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
