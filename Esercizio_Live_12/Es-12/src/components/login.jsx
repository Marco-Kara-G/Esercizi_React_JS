import { useContext, useState } from "react";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messaggio, setMessaggio] = useState("");

  const { login } = useContext(UserContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleLogin(event) {
    event.preventDefault();
    const userDatabase = localStorage.getItem("userDatabase");
    const parseUsers = JSON.parse(userDatabase);

    const userExist = parseUsers.find(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      login(userExist);
    } else {
      setMessaggio("Credenziali errate");
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
        {messaggio && <p style={{ color: "red" }}>{messaggio}</p>}
      </form>
    </>
  );
}
