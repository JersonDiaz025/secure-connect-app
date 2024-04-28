import { Navigate, Outlet } from "react-router-dom";
//import useCheckAuth from "../hooks/auth/useInfoUser";
import { ProtectedRouteProps } from "../interfaces/routes.interface";
import { AppRoutes } from "../constants/routes";
import { TOKEN_USER_KEY } from "../constants/tokenKey";

// Function to protected routes provateds
const ProtectedRoute = ({
  redirectPath = AppRoutes.LOGIN,
}: ProtectedRouteProps) => {
  // Get current state user
  //const { isAuthenticated } = useCheckAuth();
  if (!localStorage.getItem(TOKEN_USER_KEY)) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
