import { useState } from "react";

export function Change() {
  const [colore, setColore] = useState("black");
  const handleChange = () => {
    const colori = ["green", "yellow", "red", "blue"];
    const selectedColor = colori[Math.floor(Math.random() * colori.length)];
    setColore(selectedColor);
  };
  const resetChange = () => {
    const defaultColor = "black";
    setColore(defaultColor);
  };
  return (
    <>
      <h1 style={{ color: colore }}>Testo Colorato</h1>
      <button onClick={handleChange}> Clicca qui per cambiare colore</button>
      <button onClick={resetChange}>Clicca qui per resettare il colore</button>
    </>
  );
}
