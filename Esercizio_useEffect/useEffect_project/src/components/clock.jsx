import { useState } from "react";
import { useEffect } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("updating date...");

    setDate(new Date());
  });

  return (
    <>
      <div>
        <h2>Orario: {date.toLocaleTimeString()}</h2>
      </div>
    </>
  );
}
