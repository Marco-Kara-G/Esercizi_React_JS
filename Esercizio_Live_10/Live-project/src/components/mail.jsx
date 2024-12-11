import { useRef } from "react";
import { useState } from "react";

export function Mail() {
  const mailRef = useRef();
  const [error, setError] = useState("");
  const [validazione, setValidazione] = useState("");

  const handleSubmit = (event) => {
    const mail = mailRef.current.value;
    event.preventDefault();
    if (!mail.includes("@") || !mail.includes(".")) {
      setError("Farmato mail non valido");
      setValidazione("");
    } else {
      setError("");
      setValidazione(mail);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={mailRef} />
          <button type="submit">invia</button>
          {error ? <p>{error}</p> : validazione && <p>{validazione}</p>}
        </form>
      </div>
    </>
  );
}
