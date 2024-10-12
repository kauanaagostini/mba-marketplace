import { ChartHistogramIcon } from '@/assets/icon/chart-histogram'
import { PackageIcon } from '@/assets/icon/package'
import { PlusSignIcon } from '@/assets/icon/plus-sign'
import { LogoShort } from '@/assets/LogoShort'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-accent px-5 py-4">
      <LogoShort />

      <div className="flex items-center gap-2">
        <NavLink to="/">
          <ChartHistogramIcon width={20} height={20} color="--foreground" />
          Dashboard
        </NavLink>

        <Button
          variant={'ghost'}
          size={'sm'}
          className="flex items-center gap-2"
          asChild
        >
          <NavLink to="/products">
            <PackageIcon width={20} height={20} color="--foreground" />
            Produtos
          </NavLink>
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button className="flex h-10 w-[157px] items-center gap-1">
          <PlusSignIcon width={20} height={20} color="--foreground" />
          Novo produto
        </Button>
        <AccountMenu />
      </div>
    </div>
  )
}
