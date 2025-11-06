import { useEffect } from "react";
import { useExportService } from "../services/exportService";
import { useState } from "react";

export const useExport = () => {
  const { requestUserData } = useExportService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadUserData = async (password) => {
    try {
      setLoading(true);
      setError(null);

      const blob = await requestUserData(password);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (error) {
      console.error("Error at data download request: ", error)
      if (JSON.parse(error.message).error === "Re-auth required") {
        setError("Incorrect pasword");
      } else {
        setError('Server error');
      }
    } finally {
      setLoading(true);
    }
  };

  return { downloadUserData, loading, error };
};