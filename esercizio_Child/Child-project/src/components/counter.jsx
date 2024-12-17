import { useState } from "react";

export function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  const handleAdd = () => {
    setCounterValue(counterValue + 1);
  };
  const handleRemove = () => {
    setCounterValue(counterValue - 1);
  };
  const handleReset = () => {
    setCounterValue(0);
  };
  return (
    <>
      <div>
        <p>Hai contati fino a {counterValue}</p>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
