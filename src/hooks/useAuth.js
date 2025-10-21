import { useState, useEffect } from "react";
import { useAuthService } from '../services/authService';

export const useAuth = () => {
  const { register, login, logout, deleteUser } = useAuthService();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (email, username, password, phoneNumber, token, csrfToken) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(email, username, password, phoneNumber, token, csrfToken);
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
      sessionStorage.clear();
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password, token, csrfToken) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(username, password, token, csrfToken);
      sessionStorage.setItem("id", data.data.id);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await deleteUser(id);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, setError, handleRegister, handleLogin, handleLogout, handleDeleteUser };
};