import "./App.css";
import { FakeDatabase } from "./components/fakeDatabase";
import { LogIn } from "./components/login";
import { SignIn } from "./components/SignIn";

function App() {
  return (
    <div>
      <SignIn />
      <hr />
      <LogIn />
      <hr />
      <FakeDatabase />
    </div>
  );
}

export default App;
