import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const ConsentContext = createContext();

const ConsentProvider = ({ children }) => {
    const [consent, setConsent] = useState({});
    const [cookie, setCookie] = useCookies(["consent"]);

    useEffect(() => {
        setCookie("consent", consent, { path: "/" });
    }, [consent]);

    const updateConsent = (necessary, functional, analytics, marketing, personalization, security) => {
        setConsent({
            version: "2025-10-21",
            timestamp: new Date().toISOString(),
            necessary: necessary === true,
            functional: functional === true,
            analytics: analytics === true,
            marketing: marketing === true,
            personalization: personalization === true,
            security: security === true
        });
    }

    return (
        <ConsentContext.Provider value={{ consent, updateConsent }}>
            {children}
        </ConsentContext.Provider>
    );
}

export default ConsentProvider;

export const useConsent = () => {
    const ctx = useContext(ConsentContext);
    if (!ctx) throw new Error("useConsent must be used within ConsentContext!");
    return ctx;
}