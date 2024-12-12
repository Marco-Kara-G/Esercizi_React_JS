import { useState } from "react";

export function Login(props) {
  const returnState = props.state;
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [state, setState] = useState(returnState);

  const handleName = (event) => {
    setUserName(event.target.value);
  };

  const handleMail = (event) => {
    setMail(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    setState(!returnState);
    console.log(state);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUserName("");
    setMail("");
    setUserName("");
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={handleName}
        />
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="mail"
          onChange={handleMail}
        />
        <label htmlFor="checkbox">Remember me:</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <button
          type="submit"
          disabled={username && mail ? false : true}
          onClick={onLogin}
        >
          Login
        </button>
        <button type="submit" onSubmit={onSubmit}>
          Reset
        </button>
      </form>
    </div>
  );
}
