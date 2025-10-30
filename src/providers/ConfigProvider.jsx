import { createContext, useContext, useMemo } from "react";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UserDashboard from "../pages/UserDashboardPage/UserDashboard";
import HomePage from "../pages/HomePage/HomePage";

export const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
    const routesConfig = useMemo(() => [
        { path: "/", element: <HomePage />, layout: <AppLayout />, needLogin: true },
        { path: "/login", element: <LoginPage />, needLogin: false },
        { path: "/register", element: <RegisterPage />, needLogin: false },
        { path: "/dashboard", element: <UserDashboard />, layout: <AppLayout />, needLogin: true },
    ], []);

    return (
        <ConfigContext.Provider value={{ routesConfig }}>
            {children}
        </ConfigContext.Provider>
    );
}

export default ConfigProvider;

export const useConfig = () => {
    const ctx = useContext(ConfigContext);
    if (!ctx) throw new Error("useConfig must be used within ConfigContext!");
    return ctx;
}