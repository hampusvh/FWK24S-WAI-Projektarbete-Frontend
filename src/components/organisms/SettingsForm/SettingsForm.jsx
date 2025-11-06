import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { useAuth } from "../../../providers/AuthProvider";
import styles from "./SettingsForm.module.css";
import LineBreak from "../../atoms/LineBreak/LineBreak";
import Dialog from "../../molecules/Dialog/Dialog";
import { useExport } from "../../../hooks/useExport";

const SettingsForm = ({ handleSubmit, onDelete, onRequestData, showRequestDialog, setShowRequestDialog, disableRequestButton, password, setPassword }) => {
  const { user } = useAuth();
  const { error, downloadUserData } = useExport();
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
      <div className={styles.card}>
        <form
          className={styles.form}
          onSubmit={(e) => handleSubmit(e, formData)}
        >
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
        <LineBreak />
        <h2>Request your data</h2>
        <p>You can request a copy of all personal data associated with your account.</p>
        <Button onClick={() => setShowRequestDialog(true)}>
          Request Data
        </Button>
        {showRequestDialog &&
          <Dialog
            title="Do you want to request data?"
            onClose={() => setShowRequestDialog(false)}
            actions={
              <>
                <Button onClick={() => setShowRequestDialog(false)}>Cancel</Button>
                <Button onClick={() => downloadUserData(password)} disabled={disableRequestButton}>Request data</Button>
              </>
            }
          >
            <p>Enter your password to confirm the request.</p>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p>{error}</p>}
          </Dialog>
        }
        <LineBreak />
        <h2>Account removal</h2>
        <p>Deleting your account will permanently remove all your data. This action cannot be undone.</p>
        <Button type="button" onClick={onDelete} variant="warning">
          Delete account
        </Button>
      </div>
    </div>
  );
};

export default SettingsForm;
