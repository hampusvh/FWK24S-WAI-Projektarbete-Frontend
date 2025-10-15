
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getRecaptchaToken = async (action) => {
    if (!executeRecaptcha) {
      console.warn("reCAPTCHA not yet available");
      return null;
    }
    try {
      const token = await executeRecaptcha(action);
      return token;
    } catch (err) {
      console.error("reCAPTCHA error:", err);
      return null;
    }
  };

  return { getRecaptchaToken };
}