import { useState, useEffect } from "react";
import { useAuthService } from '../services/authService';

export const useAuth = () => {
  const { register } = useAuthService();
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

  return { loading, error, handleRegister };
};