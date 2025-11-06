import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Register from '../../components/organisms/Register/Register';
import Toaster from '../../components/organisms/Toaster/Toaster';
import { useRecaptcha } from "../../utils/recaptcha";
import { useCsrf } from '../../providers/CsrfProvider';
import clsx from 'clsx';
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const { loading, error, setError, handleRegister } = useAuth();
  const [showError, setShowError] = useState(false);
  const {getRecaptchaToken} = useRecaptcha()
  const navigate = useNavigate();
  const { csrf } = useCsrf();

  const handleSubmit = async (formData) => {
    const { email, username, password, phoneNumber } = formData;
    let token = null;
    if(import.meta.env.VITE_ENV == "production") {
      token = await getRecaptchaToken('register')
      if(!token){
        setError("reCAPTCHA verification failed");
        setShowError(true);
        setTimeout(() => {
          setShowError(false)
          setError("")
        }, 4000);
        return;
      }
    }
    const result = await handleRegister(email, username, password, phoneNumber, token, csrf());
    !result ? setShowError(true) : navigate("/login");
    setTimeout(() => setShowError(false), 4000);
  }


  return (
    <div className={clsx(styles.RegisterContainer)}>
      <h1>Register Account</h1>
      <Register handleSubmit={handleSubmit} loading={loading} error={error} />
      {showError && <Toaster icon="❗️" text={error} />}
    </div>
  );
};

export default RegisterPage;