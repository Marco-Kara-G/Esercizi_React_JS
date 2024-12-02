function Saluto(props) {
  return (
    <h1>
      Ciao <span className={props.class}>{props.nome}!</span>
    </h1>
  );
}
export default Saluto;
