import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useExportService = () => {
  const { binary, proxy } = useApi();

  const requestUserDataPdf = async (password) => 
    proxy.post(`/api/me/export/pdf`, { password }, null
  );

  const requestUserDataJson = async (password) => 
    proxy.post(`/api/me/export/json`, { password }, null
  );

  return { requestUserDataPdf, requestUserDataJson };
};