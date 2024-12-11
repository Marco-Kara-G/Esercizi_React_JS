import { useState } from "react";

export function Clock() {
  const defaultDate = "January 1,2000 00:00:00";
  const seconds = 1 * 1000;
  const [timer, setTimer] = useState(new Date(defaultDate));

  const startFunction = () => {};
  const resetFuncion = () => {};

  return (
    <div>
      <h1>Timer: {timer.toLocaleTimeString()}</h1>
      {/* <button name="reset" onClick={resetFuncion}>
        RESET
      </button>
      <button name="start" onClick={startFunction}>
        START
      </button> */}
    </div>
  );
}
