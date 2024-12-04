export function List() {
  const colors = ["blue", "yellow", "red", "green", "pink"];
  return (
    <div>
      <ul>
        {colors.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
