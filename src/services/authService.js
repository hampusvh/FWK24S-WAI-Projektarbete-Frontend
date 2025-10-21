import { useApi } from "../providers/ApiProvider";

export const useAuthService = () => {
  const { auth } = useApi();

  const register = (email, username, password, phoneNumber, token, csrfToken) => auth.post("/auth/register", { email, username, password, phoneNumber, token }, csrfToken);
  const login = (username, password, token, csrfToken) => auth.post("/auth/login", {username, password, token }, csrfToken);
  const logout = (recaptchaToken, csrfToken) => auth.post("/auth/logout", { recaptchaToken }, csrfToken);

  return { register, login, logout };
}