import { createContext, useContext, useEffect, useState } from "react";
import { useAuthService } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { verifyAuth } = useAuthService();
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const sessionUser = sessionStorage.getItem("user");
        if(sessionUser && (!user || (user && Object.keys(user).length < 1))) {
            const parsed = JSON.parse(sessionUser);
            setUser(parsed);
        }
    }, []);

    useEffect(() => {
        checkAuth();
    }, [verifyAuth]);

    const checkAuth = async () => {
        const data = await verifyAuth();

        if(data) {
            const userData = data.user;

            if(!userData || Object.keys(userData).length < 1) {
                clearAuth();
                setLoading(false);
                return;
            }

            setAuthorized(true);
        } else {
            clearAuth();
        }

        setLoading(false);
    }

    const setAuth = (data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        setUser(JSON.parse(sessionStorage.getItem("user")));
        setAuthorized(true);
    }

    const clearAuth = () => {
        setUser({});
        setAuthorized(false);
        sessionStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ authorized, user, setAuth, loading, clearAuth }}>
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