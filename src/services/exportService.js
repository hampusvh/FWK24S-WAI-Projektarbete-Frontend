import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useExportService = () => {
  const { binary } = useApi();
  const { csrf } = useCsrf();

  const requestUserData = async (password) => binary.post(`/me/export/pdf`, { password }, csrf());

  return { requestUserData };
};