import AppProvider from "./providers/AppProvider";
import Router from "./routes/Router";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  if(import.meta.env.VITE_ENV == "development") {
    return (
      <AppProvider>
        <Router />
      </AppProvider>
    );
  }
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={`${import.meta.env.VITE_RECAPTCHA_KEY}`}>
      <AppProvider>
        <Router />
      </AppProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
