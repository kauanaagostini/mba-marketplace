import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'

import { LogoutIcon } from '@/assets/icon/logout'
import { UserAccountIcon } from '@/assets/icon/user-account'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex select-none items-center justify-center"
          variant={'icon'}
          size={'icon'}
        >
          <UserAccountIcon
            width={40}
            height={40}
            color={'hsl(var(--primary))'}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-3 w-44 rounded-xsm bg-card"
      >
        <DropdownMenuLabel className="flex items-center justify-around gap-2">
          <UserAccountIcon width={32} height={32} color="hsl(var(--primary))" />
          <h1 className="text-lg font-semibold text-secondary-foreground">
            Seller
          </h1>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-auto w-36 bg-accent" />
        <DropdownMenuItem className="mx-3 flex cursor-pointer items-center justify-between fill-primary focus:bg-none">
          <span className="text-sm font-semibold text-primary">Sair</span>
          <LogoutIcon width={24} height={24} color="--primary" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
