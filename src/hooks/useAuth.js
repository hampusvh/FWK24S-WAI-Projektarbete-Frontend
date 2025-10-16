import { useState, useEffect } from "react";
import { useAuthService } from '../services/authService';

export const useAuth = () => {
  const { register, login, logout } = useAuthService();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (email, username, password, role, phoneNumber, token) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(email, username, password, role, phoneNumber, token);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await logout();
      setUser(null);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password, token) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(username, password, token);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleRegister, handleLogin, handleLogout };
};