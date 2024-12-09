import { useState } from "react";

export function Somma() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const cangeN1 = (event) => {
    setN1(Number(event.target.value));
  };
  const cangeN2 = (event) => {
    setN2(Number(event.target.value));
  };

  return (
    <div>
      <input type="number" name="n1" id="n1" value={n1} onChange={cangeN1} />
      <input type="number" name="n2" id="n2" value={n2} onChange={cangeN2} />

      <h2>The sumn is: {n1 + n2}</h2>
    </div>
  );
}
