import { LazyExoticComponent, ReactNode } from 'react'
export enum UserRoles {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type Route = {
  key: string
  path: string
  component: LazyExoticComponent<<T>(props: T) => JSX.Element>
  requiredRoles?: UserRoles[]
  layout?: React.ComponentType<{ children: ReactNode }>
}

export type RoutesType = Route[]
