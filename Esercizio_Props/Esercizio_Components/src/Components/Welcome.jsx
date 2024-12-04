import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div>
      <p>
        Welcome,<strong>{props.nome}</strong>!
      </p>
      <Age age={props.age} />
    </div>
  );
}
