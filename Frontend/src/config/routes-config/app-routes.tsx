import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from './publicRoutes'
import { RouteGuard } from './protected-route'
import { protectedRoutes } from './protectedRoutes'
import appConfig from '../app.config'

export const AppRoutes = () => {
  const isAuthenticated = appConfig.authenticated

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route element={<RouteGuard />}>
          {protectedRoutes.map(
            ({ path, component: Component, requiredRoles }) => (
              <Route
                key={path}
                path={path}
                element={
                  <RouteGuard requiredRoles={requiredRoles}>
                    <Component />
                  </RouteGuard>
                }
              />
            ),
          )}
        </Route>

        <Route
          path="*"
          element={
            <Navigate to={isAuthenticated ? '/dashboard' : '/'} replace />
          }
        />
      </Routes>
    </Suspense>
  )
}
