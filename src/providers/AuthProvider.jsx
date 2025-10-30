import { createContext, useContext, useEffect, useState } from "react";
import { useAuthService } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { verifyAuth } = useAuthService();
    const [authorized, setAuthorized] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        checkAuth();
    }, [verifyAuth]);

    const checkAuth = async () => {
        const data = await verifyAuth();

        if(data) {
            setUser(data.user);
            setAuthorized(true);
        } else {
            setAuthorized(false);
        }
    }

    return (
        <AuthContext.Provider value={{ authorized, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthContext!");
    return ctx;
}