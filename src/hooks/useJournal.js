import { useJournalService } from "../services/journalService";

export const useJournal = () => {
    const { upsertJournal, getJournal } = useJournalService();

    const handleUpsertJournal = async (data, token) => {
        const result = await upsertJournal(data, token);
        return result;
    }

    const handleGetJournal = async (author, date, token) => {
        const result = await getJournal(author, date, token);
        return result;
    }

    return { handleUpsertJournal, handleGetJournal };
}