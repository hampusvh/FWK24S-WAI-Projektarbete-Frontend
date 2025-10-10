import AppProvider from "./providers/AppProvider";
import Router from "./routes/Router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
