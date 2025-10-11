import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./Register.module.css";

const Register = ({ handleSubmit = () => console.log("default click from register"), loading, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "user",
    phoneNumber: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
      />
      <Input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={onChange}
      />
      <Button type="submit">
        {loading ? "Registering..." : "Register"}
      </Button>
      {error && <p>{error}</p>} {/* TODO: lägg till i komponent */}
    </form>
  )
};

export default Register;