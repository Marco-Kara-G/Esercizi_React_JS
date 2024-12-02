function Dashborad(props) {
  return (
    <div>
      <p>
        nome utente: <span>{props.nome}</span>
      </p>
      <p>
        cognome utente: <span>{props.cognome}</span>
      </p>
      <p>
        nome teleofno: <span>{props.telefono}</span>
      </p>
      <p>
        nome email: <span>{props.email}</span>
      </p>
    </div>
  );
}

export default Dashborad;
