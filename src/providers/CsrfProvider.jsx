import { createContext, useContext, useEffect, useState } from "react";
import { AUTH_API_URL } from "../config/config";

export const CsrfContext = createContext();

const CsrfProvider = ({ children }) => {
    const csrfRequest = async () => {
        try {
            const res = await fetch(`${AUTH_API_URL}/auth/csrf`, {
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
    
    async function fetchCsrf() {
       const token = await csrfRequest();
        localStorage.setItem("csrfToken", token.csrfToken);
    }

    const csrfRefreshRequest = async () => {
        try {
            const res = await fetch(`${AUTH_API_URL}/auth/csrf/refresh`, {
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

    

    const refreshCsrf = async () => {
        const token = await csrfRefreshRequest();
        localStorage.setItem("csrfToken", token.csrfToken);
    }

    const csrf = () => {
        return localStorage.getItem("csrfToken") || "";
    }

    return (
        <CsrfContext.Provider value={{ csrf, fetchCsrf, refreshCsrf }}>
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