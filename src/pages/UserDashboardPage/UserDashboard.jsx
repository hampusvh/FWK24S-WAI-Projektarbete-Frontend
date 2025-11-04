import { useNavigate } from "react-router-dom";
import UserSettingsSection from "../../components/organisms/UserSettingsSection/UserSettingsSection";
import { useAuth as hookAuth } from "../../hooks/useAuth";
import { useCsrf } from "../../providers/CsrfProvider";
import { useRecaptcha } from "../../utils/recaptcha";
import { useAuth } from "../../providers/AuthProvider";
import styles from "./UserDashboard.module.css";

const UserDashboard = () => {
  const { handleLogout } = hookAuth();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { csrf } = useCsrf();
  const { getRecaptchaToken } = useRecaptcha();

  const handleClick = async () => {
    let recaptchaToken = null;
    if (import.meta.env.VITE_ENV == "production") {
      recaptchaToken = await getRecaptchaToken("register");
      if (!recaptchaToken) {
        console.error("reCAPTCHA verification failed");
        return;
      }
    }
    await handleLogout(recaptchaToken, csrf());
    navigate("/login");
  };

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <UserSettingsSection onLogout={handleClick} />
    </div>
  );
};

export default UserDashboard;
