import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex min-h-screen max-w-[1200px] mx-auto flex-col antialiased'>
      <Header/>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
