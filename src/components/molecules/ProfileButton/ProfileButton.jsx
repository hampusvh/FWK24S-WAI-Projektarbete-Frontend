import React from "react";
import styles from "./ProfileButton.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const ProfileButton = ({ variant = "primary", className = "" }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/dashboard")}
      variant={variant}
      className={className}>
      Profile
    </Button>
  );
};

export default ProfileButton;
