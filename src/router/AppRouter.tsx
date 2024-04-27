// App.tsx
import { Route } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage, ProfilePage } from "../pages";
import ProtectedRoute from "./ProtectedRoutes";
import useCheckAuth from "../hooks/auth/useInfoUser";

function App() {
  // Get current state user
  const { isAuthenticated } = useCheckAuth();

  return (
    <Router>
      <Routes>
        <Route
          element={
            <ProtectedRoute
              canActive={isAuthenticated}
              redirectPath={AppRoutes.LOGIN}
            />
          }
        >
          <Route path="/" element={<Layout />}>
            <Route path={AppRoutes.HOME} element={<DashboardPage />} />
            <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
