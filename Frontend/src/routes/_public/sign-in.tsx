import SignIn from '@/views/authViews/sign-in'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/sign-in')({
  component: SignIn,
})
