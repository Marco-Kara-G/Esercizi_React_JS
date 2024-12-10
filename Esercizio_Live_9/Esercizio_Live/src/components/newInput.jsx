import { useState } from "react";

export function EmailInp() {
  const [mail, setmail] = useState("");
  const [error, setError] = useState("");

  const handleChangeMail = (event) => {
    const e = event.target.value;
    setmail(e);

    if (!e.includes("@") || !e.includes(".")) {
      setError("Email non valida");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="mail-text"
          id="mail-text"
          value={mail}
          onChange={handleChangeMail}
        />
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
