import { useCookies } from "react-cookie";
import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useJournalService = () => {
  const { domain } = useApi();
  const [cookies] = useCookies(["accessToken"]);

  const upsertJournal = (data, captcha) => domain.post("/journal/upsert", { data, captcha }, cookies.accessToken);
  const getJournal = (author, date, captcha) => domain.get("/journal/" + author + "/" + date, cookies.accessToken);

  return { upsertJournal, getJournal };
};