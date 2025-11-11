import { useApi } from "../providers/ApiProvider";

export const useGdprService = () => {
  const { proxy } = useApi();

  const storeConsent = (consent, token) => proxy.post("/api/gdpr/consent/store", { consent, token }, null);
  
  const getTransparency = (token) => proxy.get("/api/gdpr/transparency", { token }, null);


  return { storeConsent, getTransparency };
};