// App.tsx
import Layout from "./Layout";
import { Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { AppRoutes } from "../constants/routes";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage, ProfilePage } from "../pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute redirectPath={AppRoutes.LOGIN} />}>
          <Route path="/" element={<Layout />}>
            <Route path={AppRoutes.HOME} element={<DashboardPage />} />
            <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route
          path={AppRoutes.UNKNOWN}
          element={<Navigate to={AppRoutes.LOGIN} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
