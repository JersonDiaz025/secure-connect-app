//import useUser from "../hooks/auth/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "../interfaces/Routes";

// Function to protected routes provateds
const ProtectedRoute = ({
  canActive,
  redirectPath = "/",
}: ProtectedRouteProps) => {
  if (!canActive) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
