import "./App.css";
import { Colors } from "./components/colors";

function App() {
  const colorData = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
  ];

  return (
    <>
      <Colors colors={colorData} />
    </>
  );
}

export default App;
