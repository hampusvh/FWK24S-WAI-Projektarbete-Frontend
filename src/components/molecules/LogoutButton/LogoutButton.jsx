import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../atoms/Button/Button";
import { useCsrf } from "../../../providers/CsrfProvider";
import { useRecaptcha } from "../../../utils/recaptcha";

const LogoutButton = ({ variant = "primary", className = "" }) => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const { csrf } = useCsrf();
  const {getRecaptchaToken} = useRecaptcha()

  const onClick = async () => {
    let recaptchaToken = null;
    if(import.meta.env.VITE_ENV == "production") {
      recaptchaToken = await getRecaptchaToken('register')
      if(!recaptchaToken){
        console.error("reCAPTCHA verification failed");
        return;
      }
    }
    await handleLogout(recaptchaToken, csrf());
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
