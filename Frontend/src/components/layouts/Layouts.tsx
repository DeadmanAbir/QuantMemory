import appConfig from '@/config/app.config'
import { lazy, Suspense, useMemo } from 'react'

const Layout = () => {
  const authenticated = appConfig.authenticated
  const AppLayout = useMemo(() => {
    if (authenticated) {
      return lazy(() => import('./default-layout'))
    }else{
      return lazy(() => import('./default-layout-2'))
    }
  }, [authenticated])
  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">LOADING...</div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}

export default Layout
