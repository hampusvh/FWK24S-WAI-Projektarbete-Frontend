import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';
import CsrfProvider from "./CsrfProvider";
import ConsentProvider from "./ConsentProvider";
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
              </StylesProvider>
            </AuthProvider>
          </ApiProvider>
        </ConsentProvider>
      </CsrfProvider>
    </CookiesProvider>
);

export default AppProvider;