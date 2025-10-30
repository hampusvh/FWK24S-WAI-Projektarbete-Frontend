import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';
import CsrfProvider from "./CsrfProvider";
import ConsentProvider from "./ConsentProvider";
import ConsentBanner from "../components/organisms/ConsentBanner/ConsentBanner";
import { CookiesProvider } from "react-cookie";
import { StylesProvider } from "../foundation/StylesProvider";
import AuthProvider from "./AuthProvider";

const AppProvider = ({ children }) => (
    <CookiesProvider>
      <CsrfProvider>
        <ConsentProvider>
          <ApiProvider>
            <AuthProvider>
              <StylesProvider>
                {children}
              
                <ConsentBanner />
              </StylesProvider>
            </AuthProvider>
          </ApiProvider>
        </ConsentProvider>
      </CsrfProvider>
    </CookiesProvider>
);

export default AppProvider;