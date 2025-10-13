import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../atoms/Button/Button";

const LogoutButton = ({ variant = "primary", className = "" }) => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const onClick = async () => {
    await handleLogout();
    navigate("/login");
  };

  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={className}
    >
      Logga ut
    </Button>
  );
};

export default LogoutButton;
