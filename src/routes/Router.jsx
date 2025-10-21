import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import TermsPage from "../pages/TermsPage/TermsPage";
import UserDashboard from "../pages/UserDashboardPage/UserDashboard";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="/dashboard" element={<UserDashboard />} />
  </Routes>
);

export default Router;