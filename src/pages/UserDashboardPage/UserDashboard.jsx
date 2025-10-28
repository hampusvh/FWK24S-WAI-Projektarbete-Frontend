import { useNavigate } from "react-router-dom";
import UserSettingsSection from "../../components/organisms/UserSettingsSection/UserSettingsSection";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from 'react';
import { useCsrf } from "../../providers/CsrfProvider";
import { useRecaptcha } from "../../utils/recaptcha";

const UserDashboard = () => {
  const { handleLogout, handleDeleteUser, user, checkAuth } = useAuth();
  const navigate = useNavigate();
  const { csrf } = useCsrf();
  const {getRecaptchaToken} = useRecaptcha();

  useEffect(() => {
    checkAuth();
  }, []);

  const handleClick = async () => {
    let recaptchaToken = null;
    if(import.meta.env.VITE_ENV == "production") {
      recaptchaToken = await getRecaptchaToken('register')
      if(!recaptchaToken){
        console.error("reCAPTCHA verification failed");
        return;
      }
    }
    await handleLogout(recaptchaToken, csrf());
    navigate("/login");
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <UserSettingsSection onLogout={handleClick} onDelete={() => handleDeleteUser(user.id)}/>
    </div>
  );
};

export default UserDashboard;