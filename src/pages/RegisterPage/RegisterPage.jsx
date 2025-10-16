import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Register from '../../components/organisms/Register/Register';
import Toaster from '../../components/organisms/Toaster/Toaster';
import { useRecaptcha } from "../../utils/recaptcha";
import { useCsrf } from '../../providers/CsrfProvider';

const RegisterPage = () => {
  const { loading, error, handleRegister } = useAuth();
  const [showError, setShowError] = useState(false);
  const {getRecaptchaToken} = useRecaptcha()
  const navigate = useNavigate();
  const { csrf } = useCsrf();

  const handleSubmit = async (formData) => {
    console.log(csrf)
    const { email, username, password, phoneNumber } = formData;
    const token = await getRecaptchaToken('register')
    if(!token){
      alert("reCAPTCHA verification failed");
      return;
    }
    const result = await handleRegister(email, username, password, phoneNumber, token, csrf);
    !result ? setShowError(true) : navigate("/login");
    setTimeout(() => setShowError(false), 4000);
  }

  return (
    <div>
      <Register handleSubmit={handleSubmit} loading={loading} error={error} />
      {showError && <Toaster icon="🚫" text={error} />}
    </div>
  );
};

export default RegisterPage;