import "./index.css";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";

export function Index() {
  return (
    <div className="container">
      <Welcome name="Marco" />
      <Counter />
      <Login />
    </div>
  );
}
