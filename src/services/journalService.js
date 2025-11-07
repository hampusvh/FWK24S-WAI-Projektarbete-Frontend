import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useJournalService = () => {
  const { journal } = useApi();
  const { csrf } = useCsrf();

  const postSave = (data, captcha) => journal.post("/journal/upsert", { data, captcha }, csrf());

  return { postSave };
};