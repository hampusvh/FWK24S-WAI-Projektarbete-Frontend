import { createContext, useContext, useEffect, useState } from "react";

export const CsrfContext = createContext();

const CsrfProvider = ({ children }) => {
    const [csrf, setCsrf] = useState(null);

    const AUTH_URL = import.meta.env.VITE_AUTH_API_URL;

    useEffect(() => {
        fetchCsrf();
    }, []);
    
    const csrfRequest = async () => {
        try {
            const res = await fetch(`${AUTH_URL}/auth/csrf`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json" 
                },
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Request failed");
            }

            return data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    const fetchCsrf = async () => {
        const token = await csrfRequest();
        setCsrf(token.csrfToken);
    }

    return (
        <CsrfContext.Provider value={{ csrf, refreshCsrf: fetchCsrf }}>
            {children}
        </CsrfContext.Provider>
    );
}

export default CsrfProvider;

export const useCsrf = () => {
    const ctx = useContext(CsrfContext);
    if (!ctx) throw new Error("useCsrf must be used within CsrfProvider!");
    return ctx;
}