import { useCookies } from "react-cookie";
import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useJournalService = () => {
  const { domain, proxy } = useApi();
  const { csrf } = useCsrf();

  const upsertJournal = (data, captcha) => proxy.post("/api/journal/upsert", { data, captcha }, csrf());
  const getJournal = (author, date, captcha) => proxy.get("/api/journal/" + author + "/" + date, null);

  return { upsertJournal, getJournal };
};