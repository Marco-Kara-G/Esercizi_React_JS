function Chat({ testo, inviato }) {
  return (
    <>
      <p
        style={{
          color: "black",
          borderRadius: "4px",
          backgroundColor: inviato ? "lightgreen" : "lightgray",
          padding: "5px",
        }}
      >
        {testo}
      </p>
    </>
  );
}

export default Chat;
