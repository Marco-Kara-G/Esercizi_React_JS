import { useEffect, useState } from "react";
import "./App.css";
import { Film } from "./components/Film";
import { Semaforo } from "./components/Semaforo";

function App() {
  const filmArray = [
    "Matrix",
    "Inception",
    "Titanic",
    "Lord of the Rings",
    "Star Wars",
  ];

  const [preferiti, setPreferiti] = useState([]);

  function aggiungiPreferiti(film) {
    if (!preferiti.includes(film)) {
      setPreferiti([...preferiti, film]);
    }
  }

  function rimuoviPreferiti(film) {
    setPreferiti(preferiti.filter((item) => item !== film));
  }

  const [colore, setColore] = useState("red");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("qualcosa");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  function changeColor() {
    if (colore === "red") {
      setColore("yellow");
    } else if (colore === "yellow") {
      setColore("green");
    } else {
      setColore("red");
    }
  }

  return (
    <>
      <div>
        <ul>
          {filmArray.map((film, index) => (
            <Film
              key={index}
              titolo={film}
              stato={preferiti.includes(film)}
              add={aggiungiPreferiti}
              remove={rimuoviPreferiti}
            />
          ))}
        </ul>
        <div>
          {preferiti.length > 0 ? (
            <ul>
              {preferiti.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          ) : (
            <p>Aggiungi un film alla lista</p>
          )}
        </div>
        {/* <div>
          <Semaforo color={colore} />
          <button onClick={changeColor} style={{ maxWidth: "100px" }}>
            Cambia colore!
          </button>
        </div> */}
      </div>
    </>
  );
}

export default App;
