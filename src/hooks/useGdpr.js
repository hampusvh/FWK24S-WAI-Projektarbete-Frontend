import { useGdprService } from "../services/gdprService";

export const useGdpr = () => {
    const { storeConsent } = useGdprService();

    const handleStoreConsent = async (consent, token) => {
        const data = await storeConsent(consent, token);
        return data;
    }

    return { handleStoreConsent };
}