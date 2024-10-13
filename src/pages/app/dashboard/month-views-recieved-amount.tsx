import { useQuery } from '@tanstack/react-query'

import { getMonthViewsRecievedAmount } from '@/api/get-month-views-recieved-amount'
import { UserMultipleIcon } from '@/assets/icon/user-multiple'

export function MonthViewsRecievedAmount() {
  const { data: monthViewsRecievedAmount } = useQuery({
    queryKey: ['metrics', 'month-views-recieved-amount'],
    queryFn: getMonthViewsRecievedAmount,
  })

  return (
    <div className="flex h-[110px] w-[239px] items-center gap-4 rounded-lg bg-card py-3 pl-3 pr-7">
      <div className="flex h-[86px] w-20 items-center justify-center rounded-md bg-popover fill-popover-foreground">
        <UserMultipleIcon
          width={40}
          height={40}
          color="--poppover-foreground"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-secondary-foreground">
          {monthViewsRecievedAmount?.amount}
        </h1>
        <p className="text-xs">Pessoas visitantes</p>
      </div>
    </div>
  )
}
