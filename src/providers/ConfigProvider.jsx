import { createContext, useContext, useMemo } from "react";
import AppLayout from "../layouts/AppLayout/AppLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import TermsPage from "../pages/TermsPage/TermsPage";
import UserDashboard from "../pages/UserDashboardPage/UserDashboard";
import HomePage from "../pages/HomePage/HomePage";
import EditProfile from "../pages/EditProfile/EditProfile";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";

export const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  const routesConfig = useMemo(
    () => [
      {
        path: "/",
        element: <HomePage />,
        layout: <AppLayout />,
        needLogin: true,
      },
      { path: "/login", element: <LoginPage />, layout: <GuestLayout/ >, needLogin: false },
      { path: "/register", element: <RegisterPage />, layout: <GuestLayout/ >, needLogin: false },
      { path: "/terms", element: <TermsPage />, layout: <GuestLayout/ >, needLogin: false },
      {
        path: "/settings",
        element: <EditProfile />,
        layout: <AppLayout />,
        needLogin: true,
      },
    ],
    []
  );

  return (
    <ConfigContext.Provider value={{ routesConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;

export const useConfig = () => {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error("useConfig must be used within ConfigContext!");
  return ctx;
};
