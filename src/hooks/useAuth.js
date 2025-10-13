import { useState, useEffect } from "react";
import { useAuthService } from '../services/authService';

export const useAuth = () => {
  const { register, login } = useAuthService();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (email, username, password, role, phoneNumber) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(email, username, password, role, phoneNumber);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(username, password);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleRegister, handleLogin };
};