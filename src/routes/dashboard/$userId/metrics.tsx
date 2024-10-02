import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$userId/metrics')({
  component: () => <div>Hello /dashboard/$userId/metrics!</div>,
})
