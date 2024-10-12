import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex h-10 w-[139px] items-center justify-center gap-2 rounded-xsm fill-foreground py-2.5 text-foreground hover:bg-accent hover:fill-primary hover:text-primary data-[current=true]:bg-accent data-[current=true]:fill-primary data-[current=true]:text-primary"
      {...props}
    />
  )
}
