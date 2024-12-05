import { Age } from "./Age";

export function Welcome(props) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      <Age age={props.age} />
      {props.age > 18 ? <Age age={props.age} /> : <p>u're not over 18</p>}
      {props.age ? <Age age={props.age} /> : <p>Data not found</p>}
      {props.age > 18 && props.age < 65 ? (
        <Age age={props.age} />
      ) : (
        <p>you are below 18 or over 65 years old </p>
      )}
      {props.age > 18 && props.name === "John" ? (
        <Age age={props.age} />
      ) : (
        <p>you are not John</p>
      )}
    </>
  );
}
