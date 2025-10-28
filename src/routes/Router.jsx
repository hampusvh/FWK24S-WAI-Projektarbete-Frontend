import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import TermsPage from "../pages/TermsPage/TermsPage";
import UserDashboard from "../pages/UserDashboardPage/UserDashboard";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../layouts/AppLayout";

const Router = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route element={<AppLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>
    </Route>
  </Routes>
);

export default Router;