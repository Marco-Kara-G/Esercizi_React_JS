import { useState } from "react";

export function Login() {
  const [userName, setuserName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPass, setuserPass] = useState("");
  const [passCheck, setPassCheck] = useState(null);

  const handleChangeName = (event) => {
    setuserName(event.target.value);
    console.log(userName);
  };
  const handleChangeMail = (event) => {
    setuserMail(event.target.value);
    console.log(userMail);
  };
  const handleChangePass = (event) => {
    const password = event.target.value;
    setuserPass(password);
    console.log(userPass);

    if (password.length < 8) {
      setPassCheck(false);
    } else {
      setPassCheck(true);
    }
    console.log(passCheck);
  };
  const onLogin = (event) => {
    event.preventDefault();
    const User = { alias: userName, mailContact: userMail, password: userPass };
    console.log(User);
    console.log(event);
  };

  return (
    <div>
      <form action="submit" onSubmit={onLogin}>
        <label htmlFor="text">Nome utente:</label>
        <input type="text" name="text" id="text" onChange={handleChangeName} />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChangeMail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangePass}
        />
        <button
          type="submit"
          style={{
            backgroundColor: passCheck === false ? "red" : "lightgreen",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
