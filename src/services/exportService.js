import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useExportService = () => {
  const { binary } = useApi();
  const { csrf } = useCsrf();

  const requestUserDataPdf = async (password) => 
    binary.post(`/me/export/pdf`, { password }, csrf()
  );

  const requestUserDataJson = async (password) => 
    binary.post(`/me/export/json`, { password }, csrf()
  );

  return { requestUserDataPdf, requestUserDataJson };
};