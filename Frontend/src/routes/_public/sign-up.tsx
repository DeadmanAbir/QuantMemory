import SignUp from '@/views/authViews/sign-up'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/sign-up')({
  component: SignUp,
})

