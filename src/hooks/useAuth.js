import { useState, useEffect } from "react";
import { useAuthService } from '../services/authService';
import { useAuth as authCtx } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { register, login, logout, deleteUser, verifyAuth } = useAuthService();
  const { clearAuth, setAuth } = authCtx();
  const [authorized, setAuthorized] = useState(null);
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

  const handleLogout = async (recaptchaToken, csrfToken) => {
    setLoading(true);
    setError(null);
    try {
      const data = await logout(recaptchaToken, csrfToken);
      clearAuth();
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
      if(data.success) {
        setAuth(data.data.user);
      }
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
    try {
      const data = await deleteUser(id);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await verifyAuth();
      if (data) {
        setUser(data.user);
        setAuthorized(true);
      }
      else setAuthorized(false);
    } catch {
      setAuthorized(false);
    }
    setLoading(false);
  };

  return { loading, error, setError, handleRegister, handleLogin, handleLogout, handleDeleteUser, authorized, checkAuth };
};