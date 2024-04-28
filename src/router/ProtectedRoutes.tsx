import { Navigate, Outlet } from "react-router-dom";
import useCheckAuth from "../hooks/auth/useInfoUser";
import { ProtectedRouteProps } from "../interfaces/routes.interface";

// Function to protected routes provateds
const ProtectedRoute = ({ redirectPath = "/" }: ProtectedRouteProps) => {
  // Get current state user
  const { isAuthenticated } = useCheckAuth();
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
