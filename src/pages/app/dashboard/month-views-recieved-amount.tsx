import { UserMultipleIcon } from '@/assets/icon/user-multiple'

export function MonthViewsRecievedAmount() {
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
        <h1 className="text-3xl font-bold text-secondary-foreground">1.238</h1>
        <p className="text-xs">Pessoas visitantes</p>
      </div>
    </div>
  )
}
