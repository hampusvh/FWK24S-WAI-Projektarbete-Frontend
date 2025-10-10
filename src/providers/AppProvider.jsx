import { BrowserRouter } from "react-router-dom"
import ApiProvider from './ApiProvider';

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <ApiProvider>{children}</ApiProvider>
  </BrowserRouter>
);

export default AppProvider;