import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
  const [counter, setCounter] = useState(props.startingValue);

  function counterIncrement() {
    setCounter(counter + props.incrementValue);
  }

  function counterReset() {
    setCounter(props.startingValue);
  }
  function counterDecrease() {
    setCounter(counter - props.incrementValue);
  }

  return (
    <>
      <div>
        <button onClick={counterIncrement}>Premi qui per aumentare</button>
        <button onClick={counterDecrease}>Premi qui per ridurre</button>
        <button onClick={counterReset}>premi qui per resettare</button>
        <CounterDisplay valore={counter} />
      </div>
    </>
  );
}

// When calling a "setter" function, such as `setCounter` in React's useState,
// it's generally better to pass a function if the new state depends on the previous state.
