import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./Login.module.css";

const Login = ({ handleSubmit }) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(formData);
    return result;
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

          <div>Don't have an account? <Link to="/register">Register an account.</Link></div>

    </form>
  );
};

export default Login;
