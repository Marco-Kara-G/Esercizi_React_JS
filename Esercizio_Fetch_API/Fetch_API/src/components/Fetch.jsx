import { useEffect } from "react";
import { useState } from "react";

export function Fetch() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchfunction = async () => {
      try {
        setloading(true);
        const response = await fetch(
          "https://fakerapi.it/api/v1/users?_quantity=18&_locale=it_IT&_seed=12456"
        );
        if (!response.ok) {
          throw new Error("Caricamento dati fallito!");
        }

        //trasformo la risposta della mia fetch in JSON
        const data = await response.json();

        //inietto le informazioni reperite in users tramite setUsers
        setUsers(data.data);
      } catch (error) {
        //setto eventuali errori
        setError(error.message);
      } finally {
        //imposto il loading a false in finally perche è un operazione che deve fare a prescindere dal mio risultato
        setloading(false);
      }
    };
    fetchfunction();
  }, []);

  return (
    <div>
      {loading && <p>Caricamento dati in corso...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            <span style={{ color: "red" }}>Username: </span>
            <span>{u.username}</span>
            {" - "}
            <span style={{ color: "red" }}>Email: </span>
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
