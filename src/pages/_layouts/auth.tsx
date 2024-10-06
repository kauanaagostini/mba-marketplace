import { Outlet } from 'react-router-dom'

import { Logo } from '@/assets/Logo'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 overflow-hidden">
      <div>
        <div className="ml-10 mt-10">
          <Logo />
        </div>
        <div className="h-full bg-hero-auth-page bg-contain bg-top bg-no-repeat"></div>
      </div>
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
