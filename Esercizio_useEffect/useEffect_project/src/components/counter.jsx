import { useEffect, useState } from "react";
import { Clock } from "./clock";

export function Counter(props) {
  const [counter, setCounter] = useState(props.initialvalue);

  function incrementCounter() {
    setCounter(counter + props.incrementValue);
  }

  useEffect(() => {
    console.log(counter);
  });

  return (
    <>
      <div>
        <p>Click: {counter}</p>
        <button onClick={incrementCounter}>
          Premi per aumentare il contatore
        </button>
        <Clock />
      </div>
    </>
  );
}
