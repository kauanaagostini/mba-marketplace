import { useQuery } from '@tanstack/react-query'

import { getMonthProductsSoldAmount } from '@/api/get-month-products-sold-amount'
import { SaleTagIcon } from '@/assets/icon/sale-tag'

export function MonthProductsSoldAmount() {
  const { data: monthProductsSoldAmount } = useQuery({
    queryKey: ['metrics', 'month-products-sold-amount'],
    queryFn: getMonthProductsSoldAmount,
  })
  return (
    <div className="flex h-[110px] w-[239px] items-center gap-4 rounded-lg bg-card py-3 pl-3 pr-7">
      <div className="flex h-[86px] w-20 items-center justify-center rounded-md bg-popover fill-popover-foreground">
        <SaleTagIcon width={40} height={40} color="--poppover-foreground" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-secondary-foreground">
          {monthProductsSoldAmount?.amount}
        </h1>
        <p className="text-xs">Produtos vendidos</p>
      </div>
    </div>
  )
}
