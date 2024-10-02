import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$userId/reports')({
  component: () => <div>Hello /dashboard/$userId/reports!</div>,
})
