import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import Register from '../../components/organisms/Register/Register';

const RegisterPage = () => {
  const { loading, error, handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { email, username, password, role, phoneNumber } = formData;
    const result = await handleRegister(email, username, password, role, phoneNumber);
    if (result) navigate("/login");
  }

  return (
    <div>
      <Register handleSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
};

export default RegisterPage;