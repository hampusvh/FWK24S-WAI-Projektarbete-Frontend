import { createContext } from "react";

export const ConsentContext = createContext();

const ConsentProvider = ({ children }) => {
    

    return (
        <ConsentContext.Provider value={{  }}>
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