import { useQuery } from '@tanstack/react-query'

import { getMonthProductsAvailableAmount } from '@/api/get-month-products-available-amount'
import { StoreIcon } from '@/assets/icon/store'

export function MonthProductsAvailableAmount() {
  const { data: monthProductsAvailableAmonut } = useQuery({
    queryKey: ['metrics', 'month-products-available-amount'],
    queryFn: getMonthProductsAvailableAmount,
  })
  return (
    <div className="flex h-[110px] w-[239px] items-center gap-4 rounded-lg bg-card py-3 pl-3 pr-7">
      <div className="flex h-[86px] w-20 items-center justify-center rounded-md bg-popover fill-popover-foreground">
        <StoreIcon width={40} height={40} color="--poppover-foreground" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-secondary-foreground">
          {monthProductsAvailableAmonut?.amount}
        </h1>
        <p className="text-xs">Produtos anunciados</p>
      </div>
    </div>
  )
}
