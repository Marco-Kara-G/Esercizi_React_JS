import { useState } from "react";
import "./App.css";
import Saluto from "./components/saluto";
import Dashborad from "./components/dashboard";

function App() {
  const nomi = ["Luca", "Marco", "Giovanni", "Massimo", "Tommaso"];
  const user = {
    nome: "Marco",
    cognome: "Grassi",
    telefono: "3496209056",
    email: "marco.grassi.private@gmail.com",
  };

  return (
    <>
      <h1>HELLO WORLD!</h1>
      <input type="text" name="input" id="input" />
      {nomi.map((x, index) => (
        <Saluto
          nome={x}
          key={index}
          class={index % 2 === 0 ? "red" : "green"}
        ></Saluto>
      ))}

      {user ? (
        <Dashborad
          nome={user.nome}
          cognome={user.cognome}
          telefono={user.telefono}
          email={user.email}
        ></Dashborad>
      ) : (
        <h1>Dati non disponibili</h1>
      )}
    </>
  );
}

export default App;
