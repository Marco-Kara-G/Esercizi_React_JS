import "./App.css";
import { UserProvvider } from "./components/usercontext";
import { Registrazione } from "./components/Register";
import { Login } from "./components/login";

function App() {
  return (
    <UserProvvider>
      <Registrazione />
      <Login />
    </UserProvvider>
  );
}

export default App;
