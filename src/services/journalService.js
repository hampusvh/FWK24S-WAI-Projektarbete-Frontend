import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useJournalService = () => {
  const { journal } = useApi();
  const { csrf } = useCsrf();

  const upsertJournal = (data, captcha) => journal.post("/journal/upsert", { data, captcha }, csrf());
  const getJournal = (author, date, captcha) => journal.get("/journal/" + author + "/" + date, { captcha }, csrf());

  return { upsertJournal, getJournal };
};