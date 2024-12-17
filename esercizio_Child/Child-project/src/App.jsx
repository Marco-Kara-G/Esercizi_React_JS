import "./App.css";
import { Container } from "./components/container";
import { Counter } from "./components/counter";

function App() {
  return (
    <>
      <Container title={<h1>This is my test title</h1>}>
        <Counter />
      </Container>
    </>
  );
}

export default App;
