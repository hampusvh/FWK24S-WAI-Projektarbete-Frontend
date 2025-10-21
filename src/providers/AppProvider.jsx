import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';
import CsrfProvider from "./CsrfProvider";
import ConsentProvider from "./ConsentProvider";

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <CsrfProvider>
      <ConsentProvider>
        <ApiProvider>{children}</ApiProvider>
      </ConsentProvider>
    </CsrfProvider>
  </BrowserRouter>
);

export default AppProvider;