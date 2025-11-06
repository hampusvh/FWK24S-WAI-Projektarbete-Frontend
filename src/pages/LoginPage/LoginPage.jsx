import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/organisms/Login/Login';
import Toaster from '../../components/organisms/Toaster/Toaster';
import { useRecaptcha } from "../../utils/recaptcha";
import { useCsrf } from '../../providers/CsrfProvider';
import clsx from 'clsx';
import styles from "./LoginPage.module.css";
import { useConsent } from '../../providers/ConsentProvider';

const LoginPage = () => {
  const [showError, setShowError] = useState(false);
  const { loading, error, setError, handleLogin } = useAuth();
  const {getRecaptchaToken} = useRecaptcha()
  const navigate = useNavigate();
  const { csrf } = useCsrf();
  const { setEditing} = useConsent();

  const handleSubmit = async (formData) => {
    const { username, password } = formData;
    let token = null;

    if(import.meta.env.VITE_ENV == "production") {
      token = await getRecaptchaToken("login");
      if (!token) {
        setError("reCAPTCHA verification failed");
        setShowError(true);
        setTimeout(() => {
          setShowError(false)
          setError("")
        }, 4000);
        return;
      }
    }
    const result = await handleLogin(username, password, token, csrf());
    if(!result) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    navigate("/");
    return true;
  }

  return (
    <div className={clsx(styles.LoginContainer)}>
      <h1>Sign In</h1>
      <Login handleSubmit={handleSubmit} loading={loading} error={error} />
      {showError && <Toaster icon="❗️" text={error} />}
    </div>
  );
};

export default LoginPage;