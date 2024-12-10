import { useEffect, useState } from "react";

export function Hello(params) {
  const [nome, setNome] = useState(null);
  // useEffect(() => {
  //   console.log(nome);
  // }, [nome]);

  const handleChange = (event) => {
    const valore = event.target.value;
    if (valore.length > 10) {
      setNome(valore.toUpperCase());
    } else {
      setNome(valore);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={nome} />
      <p>Ciao {nome || "undefined user"}!</p>
    </div>
  );
}
