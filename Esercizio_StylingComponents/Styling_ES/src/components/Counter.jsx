import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const counterCheck = null;
  const [error, setError] = useState("");

  const handleAdd = () => {
    setCounter(counter + 1);
    setError("");
  };
  const handleRemove = () => {
    if (counter === 0) {
      setError("impossibile ridurre sotto il valore 0");
    } else {
      setCounter(counter - 1);
      setError("");
    }
  };
  const handleReset = () => {
    setCounter(0);
    setError("");
  };
  return (
    <div>
      <button onClick={handleAdd}>Aggiungi</button>
      <button onClick={handleRemove} disabled={error ? true : false}>
        Sottrai
      </button>
      <button onClick={handleReset}>Resetta</button>
      <p>Hai contato fino a {counter}</p>
      {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
    </div>
  );
}
