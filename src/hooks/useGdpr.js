import { useGdprService } from "../services/gdprService";

export const useGdpr = () => {
    const { storeConsent, getTransparency } = useGdprService();

    const handleStoreConsent = async (consent, token) => {
        const data = await storeConsent(consent, token);
        return data;
    }

    const handleTransparency = async (token) => {
        const data = await getTransparency(token);
        return data;
    }

    return { handleStoreConsent, handleTransparency };
}