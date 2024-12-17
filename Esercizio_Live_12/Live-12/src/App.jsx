import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./componenti/Dashboard";
import { Login } from "./componenti/Login";
import { Registrazione } from "./componenti/Registrazione";

function App() {
  const [isLogged, setIsLogged] = useState(null);
  const log = localStorage.getItem("isLogged");
  useEffect(() => {
    setIsLogged(log);
  }, []);

  return (
    <>
      <Registrazione />
      {isLogged === "true" ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;
