import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const AuthGate = ({ needLogin, children }) => {
    const { authorized } = useAuth();

    if(!authorized && needLogin) {
        return <Navigate to="/login" replace />; 
    }

    if(authorized && !needLogin) {
        return <Navigate to="/dashboard" replace />; 
    }

    return children;
}

export default AuthGate;