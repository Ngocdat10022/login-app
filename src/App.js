import AuthContextProvider from "./context/authContext";
import Router from "./router";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
