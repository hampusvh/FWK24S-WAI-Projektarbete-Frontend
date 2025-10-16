import { useApi } from "../providers/ApiProvider";

export const useAuthService = () => {
  const { auth } = useApi();

  const register = (email, username, password, role, phoneNumber, token) => auth.post("/auth/register", { email, username, password, role, phoneNumber, token });
  const login = (username, password, token) => auth.post("/auth/login", {username, password, token});
  const logout = () => auth.post("/auth/logout", {});

  return { register, login, logout };
}