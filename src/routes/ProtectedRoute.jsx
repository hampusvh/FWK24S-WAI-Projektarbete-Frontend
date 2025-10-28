import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authorized, user, checkAuth } = useAuth();

  if (authorized === null) return <p>Loading...</p>;
  if (authorized === false) return <Navigate to="/login" replace />;
  return <Outlet />
};

export default ProtectedRoute;