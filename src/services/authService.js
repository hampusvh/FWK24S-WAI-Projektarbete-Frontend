import { useApi } from "../providers/ApiProvider";

export const useAuthService = () => {
  const { auth } = useApi();

  const register = (email, username, password, role, phoneNumber) => auth.post("/auth/register", { email, username, password, role, phoneNumber });

  return { register };
}