import AppProvider from "./providers/AppProvider";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ConfigProvider, { useConfig } from "./providers/ConfigProvider";
import { buildRouter } from "./routes/Router";
import { RouterProvider } from "react-router-dom";

function RouterWrapper() {
    const { routesConfig } = useConfig();
    const router = buildRouter(routesConfig);
    return <RouterProvider router={router} />;
}

function App() {
  if(import.meta.env.VITE_ENV == "development") {
    return (
      <ConfigProvider>
        <AppProvider>
          <RouterWrapper />
        </AppProvider>
      </ConfigProvider>
    );
  }
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={`${import.meta.env.VITE_RECAPTCHA_KEY}`}>
      <ConfigProvider>
        <AppProvider>
          <RouterWrapper />
        </AppProvider>
      </ConfigProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
