import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';
import CsrfProvider from "./CsrfProvider";
import ConsentProvider from "./ConsentProvider";
import ConsentBanner from "../components/organisms/ConsentBanner/ConsentBanner";
import { CookiesProvider } from "react-cookie";
import { StylesProvider } from "../foundation/StylesProvider";

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <CookiesProvider>
      <CsrfProvider>
        <ConsentProvider>
          <ApiProvider>
            <StylesProvider>
              {children}
            
              <ConsentBanner />
            </StylesProvider>
          </ApiProvider>
        </ConsentProvider>
      </CsrfProvider>
    </CookiesProvider>
  </BrowserRouter>
);

export default AppProvider;