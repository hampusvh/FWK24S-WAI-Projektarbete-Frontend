import React, { useState } from "react";
import styles from "./EditProfile.module.css";
import SettingsForm from "../../components/organisms/SettingsForm/SettingsForm";
import { useRecaptcha } from "../../utils/recaptcha";
import { useAuth } from "../../hooks/useAuth";
import { useCsrf } from "../../providers/CsrfProvider";

import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { getRecaptchaToken } = useRecaptcha();
  const [showError, setShowError] = useState(false);
  const { loading, error, setError, handleLogin, handleEditUser } = useAuth();
  const { csrf } = useCsrf();
  const navigate = useNavigate();

  const handleSubmit = async (e, formData) => {
    console.log(1);
    e.preventDefault();
    const { email, phoneNumber } = formData;
    let token = null;

    if (import.meta.env.VITE_ENV == "production") {
      token = await getRecaptchaToken("login");
      if (!token) {
        setError("reCAPTCHA verification failed");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setError("");
        }, 4000);
        return;
      }
    }

    const result = await handleEditUser(email, phoneNumber, token, csrf());
    if (!result) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    navigate("/settings");
    return true;
  };

  return (
    <div className={styles.settingsPage}>
      <SettingsForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditProfile;
