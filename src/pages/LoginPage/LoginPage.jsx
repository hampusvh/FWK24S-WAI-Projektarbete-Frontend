import Login from '../../components/organisms/Login/Login';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loading, error, handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { username, password } = formData;
    const result = await handleLogin(username, password);
    if (result) navigate("/");
  }

  return (
    <div>
      <Login handleSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
};

export default LoginPage;