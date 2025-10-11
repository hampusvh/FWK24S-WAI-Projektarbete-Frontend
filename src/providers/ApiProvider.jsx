import { createContext, useContext } from "react";

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const AUTH_URL = import.meta.env.VITE_AUTH_API_URL;
  const DOMAIN_URL = import.meta.env.VITE_DOMAIN_API_URL;

  const request = async (base, endpoint, options = {}) => {
    try {
      const res = await fetch(`${base}${endpoint}`, {
        headers: { "Content-Type": "application/json", ...options.headers },
        ...options,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const api = {
    auth: {
      get: (url) => request(AUTH_URL, url, { method: "GET" }),
      post: (url, body) =>
        request(AUTH_URL, url, { method: "POST", body: JSON.stringify(body) }),
    },
    domain: {
      get: (url) => request(DOMAIN_URL, url, { method: "GET" }),
      post: (url, body) =>
        request(DOMAIN_URL, url, { method: "POST", body: JSON.stringify(body) }),
    },
  };

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;