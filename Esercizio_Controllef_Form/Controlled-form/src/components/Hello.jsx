import { useState } from "react";
import { NameRendere } from "./nameRender";
import { Login } from "./login";

export function Hello() {
  const [userName, setUserName] = useState("");
  const hanldeChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <NameRendere
        name={userName ? userName.toUpperCase() : "...inserire utente..."}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Inserire nome..."
        onChange={hanldeChange}
      />
      <Login state={false} />
    </div>
  );
}
