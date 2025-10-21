import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const ConsentContext = createContext();

const VERSION = "2025-10-21";

const ConsentProvider = ({ children }) => {
    const [consent, setConsent] = useState({
        version: VERSION,
        timestamp: new Date().toISOString(),
        necessary: false,
        functional: false,
        analytics: false,
        marketing: false,
        personalization: false,
        security: false,
    });

    const [cookie, setCookie] = useCookies(["consent"]);

    useEffect(() => {
        setCookie("consent", consent, { path: "/" });
    }, [consent]);

    const consentAll = (accept) => {
        setConsent({
            version: VERSION,
            timestamp: new Date().toISOString(),
            necessary: accept,
            functional: accept,
            analytics: accept,
            marketing: accept,
            personalization: accept,
            security: accept
        });
    }

    return (
        <ConsentContext.Provider value={{ consent, consentAll, setConsent }}>
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