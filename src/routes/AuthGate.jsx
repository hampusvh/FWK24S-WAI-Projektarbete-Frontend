import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const AuthGate = ({ needLogin, children }) => {
    const { loading, authorized } = useAuth();

    if(loading) return;

    if(!authorized && needLogin) {
        return <Navigate to="/login" replace />; 
    }

    if(authorized && !needLogin) {
        return <Navigate to="/" replace />; 
    }

    return children;
}

export default AuthGate;