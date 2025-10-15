import Login from '../../components/organisms/Login/Login';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useRecaptcha } from "../../utils/recaptcha";


const LoginPage = () => {
  const { loading, error, handleLogin } = useAuth();
  const {getRecaptchaToken} = useRecaptcha()
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { username, password } = formData;
    const token = await getRecaptchaToken("login");
    if (!token) {
      alert("reCAPTCHA verification failed");
      return;
    }
    const result = await handleLogin(username, password, token);
    if (result) navigate("/");
  }

  return (
    <>
      <Login handleSubmit={handleSubmit} loading={loading} error={error} />
    </>
  );
};

export default LoginPage;