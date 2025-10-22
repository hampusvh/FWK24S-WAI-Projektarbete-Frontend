import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authorized } = useAuth();

  if (authorized === null) return <p>Loading...</p>;
  if (authorized === false) return <Navigate to="/login" replace />;
  return <Outlet />
};

export default ProtectedRoute;