import * as React from 'react'
import { Link, Navigate, Outlet, createRootRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import LandingLayout from '@/layouts/LandingLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

export const Route = createRootRoute({
  component: RootLayout
})


function RootLayout() {
  const isAuthenticated = true;
  return (
    <div className='w-screen h-screen'>
      <main className='w-full h-full'>
        <Outlet />
      </main>
    </div>

  )
}

