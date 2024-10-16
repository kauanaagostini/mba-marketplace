import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import { getProfile } from '@/api/get-profile'
import { signOut } from '@/api/sign-out'
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
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(['auth'])

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
  })

  async function handleSignOut() {
    try {
      await signOutFn()
      if (cookies.auth) {
        removeCookie('auth')
      }
      navigate('/sign-in', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

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
            {profile?.seller.name}
          </h1>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-auto w-36 bg-accent" />
        <DropdownMenuItem
          asChild
          className="mx-3 flex cursor-pointer items-center justify-between fill-primary focus:bg-none"
          disabled={isSigningOut}
        >
          <button
            className="flex w-40 items-center justify-between"
            onClick={() => handleSignOut()}
          >
            <span className="text-sm font-semibold text-primary">Sair</span>
            <LogoutIcon width={24} height={24} color="--primary" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
