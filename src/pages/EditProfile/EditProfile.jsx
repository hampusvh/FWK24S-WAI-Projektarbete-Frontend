import React, { useState } from "react";
import styles from "./EditProfile.module.css";
import SettingsForm from "../../components/organisms/SettingsForm/SettingsForm";
import { useRecaptcha } from "../../utils/recaptcha";
import { useAuth as useAuthHook}  from "../../hooks/useAuth";
import { useAuth as useAuthProvider } from "../../providers/AuthProvider";
import { useCsrf } from "../../providers/CsrfProvider";
import Toaster from "../../components/organisms/Toaster/Toaster";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { getRecaptchaToken } = useRecaptcha();
  const [showError, setShowError] = useState(false);
  const { loading, error, setError, handleLogin, handleEditUser, handleDeleteUser } = useAuthHook();
  const {user} = useAuthProvider()
  const { csrf } = useCsrf();
  const navigate = useNavigate();

  const handleDelete = async () => {
      const result = await handleDeleteUser(user.id)
      if(!result){
        setShowError(true);
        setTimeout(() => setShowError(false), 4000)
      }
      navigate("/login");
      return true
    }

  const handleSubmit = async (e, formData) => {
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
      <SettingsForm handleSubmit={handleSubmit} onDelete={()=>handleDelete()}/>
    </div>
  );
};

export default EditProfile;
