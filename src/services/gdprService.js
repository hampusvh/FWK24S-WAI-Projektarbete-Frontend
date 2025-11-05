import { useApi } from "../providers/ApiProvider";

export const useGdprService = () => {
  const { gdpr } = useApi();

  const storeConsent = (consent, token) => gdpr.post("/gdpr/consent/store", { consent, token });

  return { storeConsent };
};