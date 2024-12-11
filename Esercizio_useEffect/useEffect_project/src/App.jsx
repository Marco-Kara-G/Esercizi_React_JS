import "./App.css";
import { Counter } from "./components/counter";

function App() {
  return (
    <>
      <div>
        <Counter initialvalue={0} incrementValue={1} />
      </div>
    </>
  );
}

export default App;
