import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Register from '../../components/organisms/Register/Register';
import { useRecaptcha } from "../../utils/recaptcha";

const RegisterPage = () => {
  const { loading, error, handleRegister } = useAuth();
  const {getRecaptchaToken} = useRecaptcha()
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { email, username, password, role, phoneNumber } = formData;
    const token = await getRecaptchaToken('register')
    if(!token){
      alert("reCAPTCHA verification failed");
      return;
    }
    const result = await handleRegister(email, username, password, role, phoneNumber, token);
    if (result) navigate("/login");
  }

  return (
    <div>
      <Register handleSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
};

export default RegisterPage;