import DashboardLayout from '@/layouts/DashboardLayout'
import { createFileRoute, Outlet, useLocation, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard
})

function Dashboard(){
  const userId = useParams({
    from: "/dashboard/$userId",
    select: (params) => params.userId
  })
  const location = useLocation()
  return (
    <DashboardLayout userId={userId} pathname={location.href.split('/')[3]}>
      <Outlet />
    </DashboardLayout>
  )
}

