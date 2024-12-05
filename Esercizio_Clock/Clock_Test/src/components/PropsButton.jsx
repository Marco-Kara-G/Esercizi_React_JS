export function PropsHandlerButton({ label, dataHandler }) {
  return (
    <div>
      <button onClick={dataHandler}>{label}</button>
    </div>
  );
}
