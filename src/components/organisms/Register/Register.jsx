import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./Register.module.css";

const Register = ({ handleSubmit = () => console.log("default click from register") }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="test"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="test"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="test"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="test"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button type="submit">
        Register
      </Button>
    </form>
  )
};

export default Register;