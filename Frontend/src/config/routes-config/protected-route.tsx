import { UserRoles } from '@/lib/types/routes'
import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '../app.config';

interface RouteGuardProps {
    requiredRoles?: UserRoles[];
    children?: React.ReactNode;
  }
  

export const RouteGuard: React.FC<RouteGuardProps> = ({   requiredRoles, 
    children  }) => {
  const isAuthenticated = appConfig.authenticated
  const user = { role: UserRoles.ADMIN }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRoles && !requiredRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children ? <>{children}</> : <Outlet />;
}
