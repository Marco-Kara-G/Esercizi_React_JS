import { useEffect, useState } from "react";
import { Clock } from "./clock";

export function Counter(props) {
  const [counter, setCounter] = useState(props.initialvalue);

  function incrementCounter() {
    setCounter(counter + incrementValue);
  }

  useEffect(() => {
    console.log(counter);
  });

  return (
    <>
      <div>
        <button onClick={incrementCounter}>
          Premi per aumentare il contatore
        </button>
        <Clock />
      </div>
    </>
  );
}
