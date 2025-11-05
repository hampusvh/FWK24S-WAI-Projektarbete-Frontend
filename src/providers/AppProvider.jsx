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
        <ApiProvider>
          <ConsentProvider>
            <AuthProvider>
              <StylesProvider>
                {children}
              </StylesProvider>
            </AuthProvider>
          </ConsentProvider>
        </ApiProvider>
      </CsrfProvider>
    </CookiesProvider>
);

export default AppProvider;