import { useContext } from "react";

export function Dashboard() {
  const { logOut, userLogged } = useContext(UserContext);

  return (
    <>
      <h2>
        Ciao, {userParse.nome} {userParse.cognome}
      </h2>
      <div>
        <div>
          <span>Nome: </span>
          <span style={{ color: "red" }}>{userParse.nome}</span>
        </div>
        <div>
          <span>Cognome: </span>
          <span style={{ color: "red" }}>{userParse.cognome}</span>
        </div>
        <div>
          <span>Email: </span>
          <span style={{ color: "red" }}>{userParse.email}</span>
        </div>
        <div></div>
      </div>
      <button onClick={logOut()}>Logout</button>
    </>
  );
}
