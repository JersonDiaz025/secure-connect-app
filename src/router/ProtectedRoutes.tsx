import { Navigate, Outlet } from "react-router-dom";
import useCheckAuth from "../hooks/auth/useInfoUser";
import { ProtectedRouteProps } from "../interfaces/routes.interface";
import { AppRoutes } from "../constants/routes";

// Function to protected routes provateds
const ProtectedRoute = ({ redirectPath = AppRoutes.LOGIN }: ProtectedRouteProps) => {
  // Get current state user
  const { isAuthenticated } = useCheckAuth();
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
