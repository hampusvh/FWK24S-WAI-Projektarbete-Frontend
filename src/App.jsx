import AppProvider from "./providers/AppProvider";
import Router from "./routes/Router";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={`${VITE_RECAPTCHA_KEY}`}>
      <AppProvider>
        <Router />
      </AppProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
