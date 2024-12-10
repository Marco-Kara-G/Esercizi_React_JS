import { useEffect } from "react";

export function Clock() {
  const time = new Date();

  useEffect(() => {
    setInterval(() => {}, 1000);
  });

  return (
    <>
      <div>
        <h2>{time.toLocaleTimeString}</h2>
      </div>
    </>
  );
}
