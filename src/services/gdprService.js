import { useApi } from "../providers/ApiProvider";

export const useGdprService = () => {
  const { gdpr } = useApi();

  const storeConsent = (consent, token) => gdpr.post("/gdpr/consent/store", { consent, token });
  
  const getTransparency = (token) => gdpr.get("/gdpr/transparency", { token });


  return { storeConsent, getTransparency };
};