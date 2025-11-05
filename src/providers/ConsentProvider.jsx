import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ConsentBanner from "../components/organisms/ConsentBanner/ConsentBanner";
import { useGdpr } from "../hooks/useGdpr";

export const ConsentContext = createContext();

const VERSION = "2025-10-21";
const DEFAULT_CONSENT = {
  version: VERSION,
  status: "pending",
  timestamp: null,
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  personalization: false,
};

const ConsentProvider = ({ children }) => {
  const [cookie, setCookie] = useCookies(["consent"]);
  const [editing, setEditing] = useState(false);
  const { handleStoreConsent } = useGdpr();

  const getCookieByName = (name) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) {
      return match[2];
    }
    return null;
  };

  const [consent, setConsent] = useState(() => {
    try {
      const raw = getCookieByName("consent");
      const result = raw
        ? JSON.parse(decodeURIComponent(raw))
        : DEFAULT_CONSENT;
      return result;
    } catch (e) {
      console.error(e);
      return DEFAULT_CONSENT;
    }
  });

  useEffect(() => {
    if (consent.timestamp == null) return;

    const serialized = encodeURIComponent(JSON.stringify(consent));
    const current = getCookieByName("consent") || "";
    if (current !== serialized) {
      setCookie("consent", decodeURIComponent(serialized), {
        path: "/",
        sameSite: "strict",
        secure: import.meta.env.VITE_ENV === "production",
        maxAge: 31536000,
      });

      storeConsentDb(consent);
    }
  }, [consent]);

  const consentAll = (accept) => {
    setConsent({
      version: VERSION,
      timestamp: new Date().toISOString(),
      status: accept ? "accept" : "reject",
      necessary: true,
      functional: accept,
      analytics: accept,
      marketing: accept,
      personalization: accept,
    });

    setEditing(false);
  };

  const storeConsentDb = async (consent) => {
    let token = null;
    if (import.meta.env.VITE_ENV == "production") {
      token = await getRecaptchaToken("register");
      if (!token) {
        console.error("reCAPTCHA verification failed");
        return;
      }
    }

    await handleStoreConsent(consent, token);
  };

  return (
    <ConsentContext.Provider
      value={{ consent, consentAll, setConsent, setEditing }}
    >
      {children}
      {!getCookieByName("consent") || editing ? <ConsentBanner /> : <></>}
    </ConsentContext.Provider>
  );
};

export default ConsentProvider;

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentContext!");
  return ctx;
};
