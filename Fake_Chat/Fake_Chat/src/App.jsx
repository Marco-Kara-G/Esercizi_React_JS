import "./App.css";
import Chat from "./components/chat";

function App() {
  const messaggi = [
    { testo: "ciao, tutto bene?", inviato: true },
    { testo: "Ehy ciao, tutto bene, Tu?", inviato: false },
    { testo: "molto bene grazie", inviato: true },
    { testo: "cosa fai oggi?", inviato: false },
    { testo: "Mangio la pasta, tu?", inviato: true },
    { testo: "salto la corda", inviato: false },
  ];

  return (
    <>
      <div className="chat-container">
        <h1>Chat</h1>
        {messaggi.map((x, index) => (
          <div
            className={
              x.inviato ? "state-sent message" : "state-not-sent message"
            }
          >
            <Chat testo={x.testo} inviato={x.inviato} key={index}></Chat>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
