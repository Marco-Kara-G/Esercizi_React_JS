import { useContext } from "react";
import { LenguageContext } from "./Languagecontext";

export function Hello() {
  const language = useContext(LenguageContext);

  return (
    <>
      <h2>{language === "en" ? "Hello,World!" : "Ciao, Mondo!"}</h2>
    </>
  );
}
