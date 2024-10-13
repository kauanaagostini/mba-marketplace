import { UserMultipleIcon } from '@/assets/icon/user-multiple'

export interface CustomTooltipLabelProps {
  viewsPerDay: {
    date: string
    amount: number
  }
}

export const CustomTooltipLabel = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    let visitante = ''
    if (payload[0].value === 1) {
      visitante = 'visitante'
    } else {
      visitante = 'visitantes'
    }

    return (
      <div className="w-40 space-y-2 rounded-sm bg-card p-4 shadow">
        <p className="font-semibold uppercase text-secondary-foreground">
          {label.toLocaleString('pt-BR', {
            day: '2-digit',
            month: 'long',
          })}
        </p>
        <div className="flex items-center gap-2 fill-primary">
          <UserMultipleIcon width={20} height={20} color="--primary" />
          <p className="text-lg">
            {payload[0].value} {visitante}
          </p>
        </div>
      </div>
    )
  }
}
