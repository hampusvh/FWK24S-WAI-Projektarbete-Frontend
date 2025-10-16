import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';
import CsrfProvider from "./CsrfProvider";

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <CsrfProvider>
      <ApiProvider>{children}</ApiProvider>
    </CsrfProvider>
  </BrowserRouter>
);

export default AppProvider;