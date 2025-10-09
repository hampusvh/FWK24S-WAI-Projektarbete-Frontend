import Register from '../../components/organisms/Register/Register';

const RegisterPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <Register handleSubmit={handleSubmit} />
  );
};

export default RegisterPage;