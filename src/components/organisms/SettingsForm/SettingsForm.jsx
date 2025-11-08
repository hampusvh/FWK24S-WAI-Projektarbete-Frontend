import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { useAuth } from "../../../providers/AuthProvider";
import styles from "./SettingsForm.module.css";
import { useCsrf } from "../../../providers/CsrfProvider";
import { useRecaptcha } from "../../../utils/recaptcha";
import { useNavigate } from "react-router-dom";
import { useAuth as hookAuth } from "../../../hooks/useAuth";
import LineBreak from "../../atoms/LineBreak/LineBreak";
import Dialog from "../../molecules/Dialog/Dialog";
import { useExport } from "../../../hooks/useExport";

const SettingsForm = ({
  handleSubmit,
  onDelete,
  onRequestData,
  showRequestDialog,
  setShowRequestDialog,
  disableRequestButton,
  password,
  setPassword,
}) => {
  const { user } = useAuth();
  const { error, downloadUserData, downloadUserDataJson } = useExport();
  const { csrf } = useCsrf();
  const { getRecaptchaToken } = useRecaptcha();
  const navigate = useNavigate();
  const { handleLogout } = hookAuth();

  const onClickLogout = async () => {
    let recaptchaToken = null;
    if (import.meta.env.VITE_ENV == "production") {
      recaptchaToken = await getRecaptchaToken("register");
      if (!recaptchaToken) {
        console.error("reCAPTCHA verification failed");
        return;
      }
    }
    await handleLogout(recaptchaToken, csrf());
    navigate("/login");
  };

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
        <div className={styles.field}>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <p className={styles.help}>
            Used primarily to restore password if forgotten.
          </p>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Edit email"
            value={formData.email}
            onChange={onChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <p className={styles.help}>Used for 2FA if enabled.</p>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Edit phone number"
            value={formData.phoneNumber}
            onChange={onChange}
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
      <LineBreak />
      <h2>Request your data</h2>
      <p>
        You can request a copy of all personal data associated with your
        account.
      </p>
      <Button onClick={() => setShowRequestDialog(true)}>Request Data</Button>
      {showRequestDialog && (
        <Dialog
          title="Do you want to request data?"
          onClose={() => setShowRequestDialog(false)}
          actions={
            <>
              <Button onClick={() => setShowRequestDialog(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => downloadUserData(password)}
                disabled={disableRequestButton}
              >
                PDF
              </Button>
              <Button
                onClick={() => downloadUserDataJson(password)}
                disabled={disableRequestButton}
              >
                JSON
              </Button>
            </>
          }
        >
          <p>Enter your password to confirm the request.</p>
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
        </Dialog>
      )}
      <div className={styles.logoutSection}>
        <Button type="button" onClick={onClickLogout}>
          Logout
        </Button>
      </div>

      <div className={styles.deleteAccountSection}>
        <h2>Account removal</h2>
        <p>
          You have the right to request the deletion of your account and all
          personal data we store about you at any time. Upon receiving such a
          request, we will permanently erase your information from our systems
          in accordance with applicable data protection laws, unless retention
          is required by law. This action is irreversible.
        </p>
        <Button type="button" onClick={onDelete} variant="warning">
          Permanently Delete Account
        </Button>
      </div>
    </div>
  );
};

export default SettingsForm;
