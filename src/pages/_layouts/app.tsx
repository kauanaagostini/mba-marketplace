import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col antialiased">
      <Header />

      <div className="mx-auto mt-16 w-[1030px] space-y-10">
        <Outlet />
      </div>
    </div>
  )
}
