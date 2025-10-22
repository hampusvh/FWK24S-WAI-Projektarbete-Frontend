import { useApi } from "../providers/ApiProvider";
import { useCsrf } from "../providers/CsrfProvider";

export const useAuthService = () => {
  const { auth } = useApi();
  const { csrf } = useCsrf();

  const register = (email, username, password, phoneNumber, token, csrfToken) => auth.post("/auth/register", { email, username, password, phoneNumber, token }, csrfToken);
  const login = (username, password, token, csrfToken) => auth.post("/auth/login", {username, password, token }, csrfToken);
  const logout = (recaptchaToken, csrfToken) => auth.post("/auth/logout", { recaptchaToken }, csrfToken);
  const deleteUser = (id) => auth.delete(`/auth/${id}`, csrf);
  const verifyAuth = () => auth.get(`/auth/verify`, csrf);

  return { register, login, logout, deleteUser, verifyAuth };
};