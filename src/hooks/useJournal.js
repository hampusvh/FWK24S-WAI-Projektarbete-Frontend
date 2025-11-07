import { useJournalService } from "../services/journalService";

export const useJournal = () => {
    const { postSave } = useJournalService();

    const handlePostSave = async (data, token) => {
        const result = await postSave(data, token);
        return result;
    }

    return { handlePostSave };
}