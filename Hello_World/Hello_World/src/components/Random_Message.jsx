function RandomMessage() {
  const messaggi = [
    "Oggi fa caldo",
    "Fa molto freddo",
    "Fuori piove",
    "Sta nevicando",
    "Il cielo è nuvoloso",
  ];

  const randomizzatore = Math.floor(Math.random() * messaggi.length);

  return (
    <>
      {!messaggi[randomizzatore] ? (
        <p>Errore</p>
      ) : (
        <p>{messaggi[randomizzatore]}</p>
      )}
    </>
  );
}

export default RandomMessage;
