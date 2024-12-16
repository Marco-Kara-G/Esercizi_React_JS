import { useState } from "react";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      if (
        value.length < 6 ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()]/.test(value)
      ) {
        setError(
          "La password deve contenere almeno 6 caratteri, di cui almeno un numero e un carattere speciale(!@#$%^&*())"
        );
      } else {
        setError("");
      }
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existUser = localStorage.getItem("user");
    if (existUser) {
      const parseExistUser = JSON.parse(existUser);
      if (parseExistUser.mail === data.email) {
        setError("Email gia registrata");
        return;
      }
    }
    localStorage.setItem("user", JSON.stringify(data));
    setError("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleChange}
            value={data.nome}
          />
          <label htmlFor="cognome">Cognome:</label>
          <input
            type="text"
            name="cognome"
            id="cognome"
            onChange={handleChange}
            value={data.cognome}
          />
          <label htmlFor="email">email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
          />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={data.password}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={!!error}>
            Registrati
          </button>
        </form>
      </div>
    </>
  );
}
