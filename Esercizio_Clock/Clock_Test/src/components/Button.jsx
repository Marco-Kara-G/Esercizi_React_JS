import { PropsHandlerButton } from "./PropsButton";

export function DateButton() {
  const handlerDate = () => {
    const localDate = new Date();
    alert(`Local time: ${localDate.toLocaleTimeString()}`);
  };

  return (
    <div>
      <p>Click this button to show local time!</p>
      <button onClick={handlerDate}>Click me!</button>
      <PropsHandlerButton label="Click Also Me!" dataHandler={handlerDate} />
    </div>
  );
}
