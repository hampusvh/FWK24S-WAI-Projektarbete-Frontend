import AppProvider from "./providers/AppProvider";
import Router from "./routes/Router";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lfb_OkrAAAAAKwVU7G0vNKTewyt_0PUuq0yHpsg">
      <AppProvider>
        <Router />
      </AppProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
