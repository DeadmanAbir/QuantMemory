import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from './publicRoutes'
import { RouteGuard } from './protected-route'
import { protectedRoutes } from './protectedRoutes'
import appConfig from './app.config'

export const AppRoutes = () => {
  const isAuthenticated = appConfig.authenticated

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes.map(({ path, component: Component, layout: Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              Layout ? (
                <Layout>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )
            }
          />
        ))}

        <Route element={<RouteGuard />}>
          {protectedRoutes.map(
            ({ path, component: Component, layout: Layout, requiredRoles }) => (
              <Route
                key={path}
                path={path}
                element={
                  <RouteGuard requiredRoles={requiredRoles}>
                    {Layout ? (
                      <Layout>
                        <Component />
                      </Layout>
                    ) : (
                      <Component />
                    )}
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
