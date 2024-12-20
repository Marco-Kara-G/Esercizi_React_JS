import { useState } from "react";

export function SignIn() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [userList, setuserList] = useState([]);
  const [errore, setErrore] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    //controllo dei valori input di "password" per regolamentarne l'inserimento e generare eventuali errori bloccanti
    if (name === "password") {
      if (
        value.length < 6 ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()]/.test(value)
      ) {
        setErrore(
          "La password deve contenere almeno sei caratteri di cui almeno un carattere speciale e una lettera maiuscola"
        );
      } else {
        setErrore("");
      }
    }

    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //controllo per evitare inserimenti multipli dello stesso valore di email e generazione errori
    const existingMail = userList.some((u) => u.email === user.email);
    if (existingMail) {
      setErrorEmail("Email già registrata");
      return;
    }

    //push valori dell'oggetto "User" in array "userList" per creare database fittizio di utenti
    userList.push(user);

    //utilizzo metodo "stingify" di JSON per creazione elemento in localStorage con valore "userList"
    const userListStringify = JSON.stringify(userList);
    localStorage.setItem("userList", userListStringify);
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          name="surname"
          id="surname"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          required
        />

        {/* render condizionale dell'errore attribuito al campo "password" per controllo lato front/utente */}
        {errore && <p style={{ color: "red" }}> {errore}</p>}

        <button type="submit">Sign In</button>

        {/* render condizionale dell'errore attribuito al campo "email" per controllo lato front/utente */}
        {errorEmail && <p style={{ color: "red" }}> {errorEmail}</p>}
      </form>
    </>
  );
}
