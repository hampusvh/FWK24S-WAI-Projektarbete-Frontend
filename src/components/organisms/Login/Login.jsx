import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./Login.module.css";

const Login = ({ handleSubmit, loading, error }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
    <form className={styles.form} onSubmit={onSubmit}>
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

      <Button type="submit">Login</Button>
      {error && <p>{error}</p>} {/* TODO: lägg till i komponent */}
    </form>
  );
};

export default Login;
