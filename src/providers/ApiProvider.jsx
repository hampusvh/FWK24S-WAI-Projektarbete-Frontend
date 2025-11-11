import { createContext, useContext } from "react";
import { useCsrf } from "./CsrfProvider";

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children }) => {
  const { fetchCsrf, refreshCsrf } = useCsrf();

  const AUTH_URL = import.meta.env.VITE_AUTH_API_URL;
  const DOMAIN_URL = "https://localhost:8080";

  const request = async (base, endpoint, options = {}) => {
    try {
      let opts = {
        credentials: "include",
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
      };

      let res = await fetch(`${base}${endpoint}`, opts);

      // access token expired
      if (res.status === 401) {
        await refreshCsrf();
        res = await fetch(`${base}${endpoint}`, opts);
      }

      if (res.status === 403) {
        await fetchCsrf();
        res = await fetch(`${base}${endpoint}`, opts);
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const requestBinary = async (base, endpoint, options = {}) => {
    let opts = {
      credentials: "include",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    };

    let res = await fetch(`${base}${endpoint}`, opts);

    if (res.status === 401) {
      await refreshCsrf();
      res = await fetch(`${base}${endpoint}`, opts);
    }

    if (res.status === 403) {
      await fetchCsrf();
      res = await fetch(`${base}${endpoint}`, opts);
    }

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Binary request failed");
    }

    return await res.blob();
  };

  const api = {
    auth: {
      get: (url, csrfToken = "") =>
        request(AUTH_URL, url, {
          method: "GET",
          headers: { "X-CSRF-Token": csrfToken },
        }),
      post: (url, body, csrfToken = "") =>
        request(AUTH_URL, url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken },
        }),
      delete: (url, csrfToken = "") =>
        request(AUTH_URL, url, {
          method: "DELETE",
          headers: { "X-CSRF-Token": csrfToken },
        }),
      patch: (url, body, csrfToken = "") =>
        request(AUTH_URL, url, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken },
        }),
    },
    domain: {
      get: (url, bearer) =>
        request(DOMAIN_URL, url, {
          method: "GET",
          headers: { "Authorization": `Bearer ${bearer}` },
        }),
      post: (url, body, bearer) =>
        request(DOMAIN_URL, url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Authorization": `Bearer ${bearer}` },
        }),
      patch: (url, body, bearer) =>
        request(DOMAIN_URL, url, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { "Authorization": `Bearer ${bearer}` },
        }),
    },
    proxy: {
      get: (url) =>
        request("https://localhost:8080", url, {
          method: "GET",
          headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        }),
      post: (url, body, csrfToken = "") =>
        request("https://localhost:8080", url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken, 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        }),
      patch: (url, body, csrfToken = "") =>
        request("https://localhost:8080", url, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken, 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        }),
    },
    gdpr: {
      get: (url, csrfToken = "") =>
        request(DOMAIN_URL, url, {
          method: "GET",
          headers: { "X-CSRF-Token": csrfToken },
        }),
      post: (url, body, csrfToken = "") =>
        request(DOMAIN_URL, url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken },
        }),
      patch: (url, body, csrfToken = "") =>
        request(DOMAIN_URL, url, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: { "X-CSRF-Token": csrfToken },
        }),
    },
    binary: {
      get: (url, headers = {}) =>
        request(DOMAIN_URL, url, { method: "GET", headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, }),
      post: (url, body, headers = {}) =>
        request(DOMAIN_URL, url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }),
    },
  };

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
