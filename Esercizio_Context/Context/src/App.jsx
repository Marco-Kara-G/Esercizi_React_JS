import { useState } from "react";
import "./App.css";
import { Hello } from "./conponents/Hello";
import { LenguageContext } from "./conponents/Languagecontext";

function App() {
  const [language, setLanguage] = useState("");
  const handleLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <>
      <div>
        <button onClick={() => handleLanguage("it")}>IT</button>
        <button onClick={() => handleLanguage("en")}>EN</button>
        <LenguageContext.Provider value="en">
          <Hello />
        </LenguageContext.Provider>
      </div>
    </>
  );
}

export default App;
