import { useEffect } from "react";
import { useExportService } from "../services/exportService";
import { useState } from "react";

export const useExport = () => {
  const { requestUserDataPdf, requestUserDataJson } = useExportService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadUserData = async (password) => {
    try {
      setLoading(true);
      setError(null);
console.log("pdf!")
      const blob = await requestUserDataPdf(password);
      console.log("Received blob: ", blob);
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
      setLoading(false);
    }
  };

    const downloadUserDataJson = async (password) => {
    try {
      setLoading(true);
      setError(null);

      const data = await requestUserDataJson(password); // <-- it's already an object

      const fileBlob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(fileBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "user_data.json";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (error) {
      console.error("Error at data download request:", error);
      // don’t parse error.message as JSON; it’s just a string
      if (/re-?auth required/i.test(error?.message ?? "")) {
        setError("Incorrect password");
      } else {
        setError("Server error");
      }
    } finally {
      setLoading(false);
    }

  };

  return { downloadUserData, downloadUserDataJson, loading, error };
};