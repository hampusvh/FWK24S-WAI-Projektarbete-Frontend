import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { useAuth } from "../../../providers/AuthProvider";
import styles from "./SettingsForm.module.css";

const SettingsForm = ({ handleSubmit, onDelete }) => {
  const { user } = useAuth();
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    email: user.email,
    phoneNumber: user.phoneNumber,
  });

  return (
    <div className={styles.settingsPage}>
      <h1>Settings</h1>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e, formData)}>
        <label>Change email</label>
        <Input
          name="email"
          type="text"
          placeholder="Edit email"
          value={formData.email}
          onChange={onChange}
        />
        <label>Change phone number</label>
        <Input
          name="phoneNumber"
          type="text"
          placeholder="Edit phone number"
          value={formData.phoneNumber}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </form>
      <Button type="button" onClick={onDelete} variant="warning">
        Delete account
      </Button>
    </div>
  );
};

export default SettingsForm;
